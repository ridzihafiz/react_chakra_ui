import React from "react";
import {
  Center,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormHelperText,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function Login() {
  // react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // handle login
  const handleLogin = (input) => {
    console.log(input);
  };

  return (
    <Center
      backgroundColor={"teal.400"}
      color={"white"}
      minH={"100vh"}
      flexDirection={"column"}
      gap={"4"}
    >
      <Heading>Login Page</Heading>

      <form autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
        <FormControl mb={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            {...register("email", {
              required: { value: true, message: "email must be filled" },
              pattern: {
                value:
                  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                message: "Email is not valid",
              },
            })}
          />
          {errors.email && (
            <FormHelperText>{errors.email.message}</FormHelperText>
          )}
        </FormControl>

        <FormControl mb={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              id="password"
              type={"password"}
              {...register("password", {
                required: { value: true, message: "password must be filled" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message:
                    "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
                },
              })}
            />
            <InputRightElement children={<>👁️</>} />
          </InputGroup>
          {errors.password && (
            <FormHelperText>{errors.password.message}</FormHelperText>
          )}
        </FormControl>

        <Button bg={"white"} color={"teal.200"} type="submit">
          Login
        </Button>
      </form>
    </Center>
  );
}
