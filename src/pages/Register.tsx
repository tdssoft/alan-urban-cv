import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Hasła nie są identyczne');
      return;
    }

    setIsLoading(true);

    try {
      const result = await register(email, password);

      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message || 'Błąd rejestracji');
      }
    } catch (err) {
      setError('Wystąpił nieoczekiwany błąd');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Rejestracja</CardTitle>
          <CardDescription className="text-center">
            Utwórz nowe konto, aby uzyskać dostęp do CV
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="twoj@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Hasło</Label>
              <Input
                id="password"
                type="password"
                placeholder="Min. 6 znaków"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                minLength={6}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Potwierdź hasło</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Powtórz hasło"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
                minLength={6}
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Rejestracja...' : 'Zarejestruj się'}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            <p className="text-gray-600">
              Masz już konto?{' '}
              <Link to="/login" className="text-blue-600 hover:underline font-medium">
                Zaloguj się
              </Link>
            </p>
          </div>

          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800">
              <strong>Uwaga:</strong> Konta testowe są już utworzone. Możesz się zalogować używając:
              <br />• alan.urban23@gmail.com
              <br />• wwanat01@gmail.com
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
