import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Users, BookOpen, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function CoursesPage() {
  const courses = [
    {
      id: 'grade-10',
      title: 'Grade 10 (SEE Board)',
      description: 'Complete preparation for Secondary Education Examination',
      subjects: ['Mathematics', 'Optional Math', 'Science', 'English'],
      students: '1,250',
      duration: '12 months',
      difficulty: 'Intermediate',
      featured: true
    },
    {
      id: 'grade-11',
      title: 'Grade 11 (+2)',
      description: 'Foundation for higher secondary education',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
      students: '850',
      duration: '12 months',
      difficulty: 'Advanced',
      featured: false
    },
    {
      id: 'grade-12',
      title: 'Grade 12 (+2)',
      description: 'Complete preparation for board examinations',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
      students: '920',
      duration: '12 months',
      difficulty: 'Advanced',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Course</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select your grade level to access personalized learning materials, practice questions, and concept maps
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className={`h-full hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                  course.featured ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <GraduationCap className="w-8 h-8 text-blue-600" />
                      {course.featured && (
                        <Badge className="bg-blue-600">Most Popular</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{course.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Subjects */}
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">Subjects:</h4>
                        <div className="flex flex-wrap gap-1">
                          {course.subjects.map((subject) => (
                            <Badge key={subject} variant="outline" className="text-xs">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">{course.students} students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">{course.duration}</span>
                        </div>
                      </div>

                      {/* Difficulty */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Difficulty:</span>
                        <Badge variant={course.difficulty === 'Advanced' ? 'destructive' : 'secondary'}>
                          {course.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">More Courses Coming Soon</h2>
            <p className="text-gray-600 mb-8">We&apos;re working on additional courses for different educational boards</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="opacity-60">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6" />
                    A-Levels
                  </CardTitle>
                  <p className="text-gray-600">Advanced level courses</p>
                </CardHeader>
              </Card>
              <Card className="opacity-60">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6" />
                    Bachelor Entrance
                  </CardTitle>
                  <p className="text-gray-600">University entrance preparation</p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}