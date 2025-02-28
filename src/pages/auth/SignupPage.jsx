// React library import
import { useForm } from "react-hook-form";

// MUI import
import { Box, Grid, Typography, Button } from "@mui/material";

// Custom import
import FormInput from "../../components/FormInput";
import theme from "../../assets/themes";
import LandingContainer from "../../components/styles/LandingContainer";
import SignupImgSvg from "../../assets/images/Signup-illu.svg";

function SignupPage() {
    // form controller
    const { handleSubmit, control } = useForm();

    // handle submission
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        // ============ Start container ============
        <LandingContainer sx={{ my: 6 }}>
            {/* Start grid container */}
            <Grid container spacing={4}>
                {/* Start signup section */}
                <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}>
                    {/* Top text container */}
                    <Box mb={5}>
                        <Typography
                            component="h4"
                            sx={{
                                fontSize: theme.typography.h2,
                                fontWeight: theme.fontWeight.bold,
                                lineHeight: 2,
                            }}
                        >
                            Sign up
                        </Typography>
                        <Typography>
                            Let’s get started. Are you ready to be a part of our
                            digital badge? Then boldly move forward with us.
                        </Typography>
                    </Box>
                    {/* Start form Container */}
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        display="flex"
                        flexDirection="column"
                        gap={3}
                        noValidate // Reset to default
                    >
                        {/* Username */}
                        <FormInput
                            name="username"
                            label="Username"
                            control={control}
                            type="text"
                            required={true}
                            // Additional props if needed
                        />
                        {/* Email */}
                        <FormInput
                            label="Email"
                            name="email"
                            control={control}
                            required={true}
                            type="text"
                        />
                        {/* Password */}
                        <FormInput
                            label="Password"
                            name="password"
                            control={control}
                            type="password"
                            required={true}
                        />
                        {/* Confirm password */}
                        <FormInput
                            label="Confirm Password"
                            name="cfPassword"
                            control={control}
                            type="password"
                            required={true}
                        />
                        {/* Submit button */}
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            sx={{
                                color: theme.palette.background.default,
                                borderRadius: theme.customShape.btn,
                                fontWeight : theme.fontWeight.bold
                            }}
                        >
                            Sign Up
                        </Button>
                        {/* Text description */}
                        <Typography
                            textAlign="center"
                            color={theme.palette.text.secondary}
                        >
                            By signing up to create an account I accept{" "}
                            <Typography
                                component="span"
                                sx={{
                                    fontWeight: theme.fontWeight.semiBold,
                                    color: theme.palette.text.primary,
                                }}
                            >
                                Term of Use{" "}
                            </Typography>
                            and{" "}
                            <Typography
                                component="span"
                                sx={{
                                    fontWeight: theme.fontWeight.semiBold,
                                    color: theme.palette.text.primary,
                                }}
                            >
                                Privacy Policy.
                            </Typography>
                        </Typography>
                        <Typography
                            textAlign="center"
                            color={theme.palette.text.secondary}
                        >
                            Already have an account?{" "}
                            <Typography
                                component="span"
                                sx={{
                                    color: theme.palette.text.primary,
                                    fontWeight: theme.fontWeight.bold,
                                }}
                            >
                                Log in
                            </Typography>{" "}
                        </Typography>
                        <Typography
                            color={theme.palette.text.secondary}
                            fontSize={theme.typography.body2}
                        >
                            Let’s get started. Are you ready to be a part of our
                            digital badge? Then boldly move forward with us.
                        </Typography>
                    </Box>
                    {/* End form container */}
                </Grid>
                {/* End signup section */}

                {/* Image container */}
                <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
                    <Box
                        component="img"
                        sx={{
                            width: "100%",
                        }}
                        alt="illustration"
                        src={SignupImgSvg}
                    />
                </Grid>
            </Grid>
        </LandingContainer>
    );
}

export default SignupPage;
