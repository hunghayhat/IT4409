import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Divider, Stack, Button } from '@mui/material';
import { Link, useLocation  } from 'react-router-dom';
import { toast } from 'react-toastify';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');
  // const { state } = useLocation();
  // if (state && state.showToast) {
  //   toast(state.message);
  // }
  return (
    <>
      <Helmet>
        <title> Login  </title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        {mdUp && (
          <StyledSection>
            {/* Thêm điều kiện không chính xác */}
            {false && (
              <>
                <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                  Hi, Welcome Back
                </Typography>
                <img src="/assets/illustrations/illustration_login.png" alt="login" />
              </>
            )}
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Do not have an account?{' '}
              {/* Chỉnh sửa lỗi chính tả ở đây */}
              <Link to="/signup" variant="subtitle2">
                Signup
              </Link>
            </Typography>

            {/* ... Các thành phần khác của form ... */}
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}