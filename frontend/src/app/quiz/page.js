import Navbar from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <FileText className="w-8 h-8" />
                Quiz
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Quiz feature coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}