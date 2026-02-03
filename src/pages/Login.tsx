import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { getRememberedEmail, setRememberedEmail } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';

export default function Login() {
  const { login, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Auto-redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      if (user?.isFirstLogin) {
        navigate('/set-password', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [isAuthenticated, user, navigate]);

  // Load remembered email on mount
  useEffect(() => {
    const remembered = getRememberedEmail();
    if (remembered) {
      setEmail(remembered);
      setRememberMe(true);
      setShowPassword(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await login(email, password || undefined);

      if (result.success) {
        // Save or clear remembered email
        if (rememberMe) {
          setRememberedEmail(email);
        } else {
          setRememberedEmail(null);
        }
        navigate('/dashboard');
      } else if (result.requiresPassword) {
        setShowPassword(true);
        setError(result.message || '');
      } else {
        setError(result.message || 'Błąd logowania');
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
          <CardTitle className="text-2xl font-bold text-center">Logowanie</CardTitle>
          <CardDescription className="text-center">
            Wprowadź swój email, aby się zalogować
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

            {showPassword && (
              <div className="space-y-2">
                <Label htmlFor="password">Hasło</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Wprowadź hasło"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            )}

            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
                disabled={isLoading}
              />
              <Label htmlFor="rememberMe" className="text-sm font-normal cursor-pointer">
                Zapamiętaj mnie
              </Label>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Logowanie...' : 'Zaloguj się'}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            <p className="text-gray-600">
              Nie masz konta?{' '}
              <Link to="/register" className="text-blue-600 hover:underline font-medium">
                Zarejestruj się
              </Link>
            </p>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700 font-medium mb-2">Konta testowe:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• alan.urban23@gmail.com</li>
              <li>• wwanat01@gmail.com</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              Pierwsze logowanie bez hasła
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
