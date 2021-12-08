import React from "react";
import firebase from "firebase/compat/app";
import SocialMediaAuth from "../config/auth";
import { useNavigate } from "react-router";
import { googleProvider } from "..";
interface Props {
  onChange: (name: string) => void;
}

export const Login: React.FC<Props> = ({ onChange }: Props) => {
  const navigate = useNavigate();

  const handleLoginProvider = async (provider: firebase.auth.AuthProvider) => {
    await SocialMediaAuth(provider).then((res) => {
      if (res.user.displayName) {
        onChange(res.user.displayName);
        navigate("/home", { state: res.user.displayName });
      }
    });
  };
  return (
    <button onClick={() => handleLoginProvider(googleProvider)}>
      googleでログイン
    </button>
  );
};
