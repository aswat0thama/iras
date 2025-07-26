from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User, UserProfile

class UserRegistrationSerializer(serializers.ModelSerializer):
    """Serializer for user registration"""
    password = serializers.CharField(write_only=True, min_length=8)
    password_confirm = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = [
            'username', 'email', 'password', 'password_confirm',
            'first_name', 'last_name', 'grade', 'phone_number',
            'preferred_language', 'daily_goal_questions'
        ]
    
    def validate(self, data):
        """Validate password confirmation"""
        if data['password'] != data['password_confirm']:
            raise serializers.ValidationError("Passwords don't match")
        return data
    
    def create(self, validated_data):
        """Create user with encrypted password"""
        validated_data.pop('password_confirm')
        password = validated_data.pop('password')
        
        user = User.objects.create_user(**validated_data)
        user.set_password(password)
        user.save()
        
        # Create user profile
        UserProfile.objects.create(user=user)
        
        return user

class UserLoginSerializer(serializers.Serializer):
    """Serializer for user login"""
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, data):
        """Validate user credentials"""
        username = data.get('username')
        password = data.get('password')
        
        if username and password:
            user = authenticate(username=username, password=password)
            if not user:
                raise serializers.ValidationError('Invalid credentials')
            if not user.is_active:
                raise serializers.ValidationError('User account is disabled')
            data['user'] = user
        else:
            raise serializers.ValidationError('Must include username and password')
        
        return data

class UserProfileSerializer(serializers.ModelSerializer):
    """Serializer for user profile"""
    
    class Meta:
        model = UserProfile
        fields = [
            'bio', 'school_name', 'location', 'preferred_subjects',
            'learning_style', 'is_public_profile', 'allow_friend_requests'
        ]

class UserSerializer(serializers.ModelSerializer):
    """Main user serializer for API responses"""
    profile = UserProfileSerializer(read_only=True)
    grade_display = serializers.CharField(source='get_grade_display', read_only=True)
    
    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'first_name', 'last_name',
            'grade', 'grade_display', 'phone_number', 'profile_picture',
            'preferred_language', 'total_points', 'current_streak',
            'longest_streak', 'daily_goal_questions', 'profile',
            'date_joined', 'last_login'
        ]
        read_only_fields = ['total_points', 'current_streak', 'longest_streak']

class UserUpdateSerializer(serializers.ModelSerializer):
    """Serializer for updating user profile"""
    profile = UserProfileSerializer()
    
    class Meta:
        model = User
        fields = [
            'first_name', 'last_name', 'email', 'grade',
            'phone_number', 'preferred_language', 'daily_goal_questions',
            'profile'
        ]
    
    def update(self, instance, validated_data):
        """Update user and profile"""
        profile_data = validated_data.pop('profile', {})
        
        # Update user fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        
        # Update profile fields
        if profile_data:
            profile = instance.profile
            for attr, value in profile_data.items():
                setattr(profile, attr, value)
            profile.save()
        
        return instance