import firebase from 'firebase/compat/app';
import { UserCredential } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '..';

const SocialMediaAuth = async (
  provider: firebase.auth.AuthProvider
): Promise<UserCredential> => {
  return await signInWithPopup(auth, provider);
};
export default SocialMediaAuth;
