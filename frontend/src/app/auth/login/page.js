import Navbar from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <LogIn className="w-8 h-8" />
                Login 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">Authentication feature coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}