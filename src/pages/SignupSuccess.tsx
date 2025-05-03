import React, { useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';

const SignupSuccess: React.FC = () => {
  const navigate = useNavigate();
  
  // Track conversion when this page loads
  useEffect(() => {
    // LinkedIn conversion tracking code
    if (window.lintrk) {
      window.lintrk('track', { conversion_id: 'signup-completed' });
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          textAlign: 'center',
          py: 8,
        }}
      >
        <CheckCircleOutlineIcon
          sx={{ fontSize: 80, color: 'success.main', mb: 4 }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Thank You for Signing Up!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Your account has been successfully created. We're excited to have you join the InsightPulseAI community!
        </Typography>
        <Typography variant="body2" sx={{ mb: 6 }}>
          A confirmation email has been sent to your inbox with further instructions.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ mr: 2 }}
          >
            Return to Home
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/dashboard')}
          >
            Go to Dashboard
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupSuccess;