import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function SetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setPassword: setUserPassword, user } = useAuth();
  const navigate = useNavigate();

  // If not authenticated or not first login, redirect
  if (!user || !user.isFirstLogin) {
    navigate('/login');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Hasła nie są identyczne');
      return;
    }

    if (password.length < 6) {
      setError('Hasło musi mieć co najmniej 6 znaków');
      return;
    }

    setIsLoading(true);

    try {
      const result = await setUserPassword(password);

      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message || 'Nie udało się ustawić hasła');
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
          <CardTitle className="text-2xl font-bold text-center">Ustaw hasło</CardTitle>
          <CardDescription className="text-center">
            Witaj, <strong>{user.email}</strong>!
            <br />
            To Twoje pierwsze logowanie. Ustaw hasło, aby zabezpieczyć swoje konto.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Nowe hasło</Label>
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
              {isLoading ? 'Ustawianie hasła...' : 'Ustaw hasło i kontynuuj'}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              Po ustawieniu hasła zostaniesz przekierowany do swojego CV.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
