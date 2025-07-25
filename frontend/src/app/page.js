import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Microscope, Globe, Target, ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      <main className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IRA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Interactive Learning Platform designed specifically for Grade 10 SEE Board students. 
              Master your subjects with personalized practice, concept maps, and adaptive learning.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="text-lg px-8 py-4">
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/concept-map">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Explore Concept Maps
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-blue-600" />
                  Mathematics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Algebra, Geometry, Trigonometry and Statistics</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-600" />
                  Optional Math
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced calculus, matrices and vectors</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Microscope className="w-6 h-6 text-purple-600" />
                  Science
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Physics, Chemistry, and Biology</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-orange-600" />
                  English
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Grammar, Literature, and Writing Skills</p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Practice Questions</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4</h3>
              <p className="text-gray-600">Core Subjects</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}