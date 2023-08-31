import { createContext, useEffect, useState } from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../firebaseConfig/firebase.config';

export const PassContextParams = createContext(null);
export const DataPassContext = createContext(null);

const ContextPass = ({ children }) => {
  const [user, setUser] = useState(null);
  const [recipeData, setRecipeData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://chef-lobby-server.vercel.app/recipes_person'
      );
      const data = await res.json();
      setRecipeData(data);
    }
    fetchData();
  }, []);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //create user using email, password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update profile userName, photoUrl
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //sign in user
  const userSignin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const userWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //sign in with github
  const userWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //user signout
  const signOutUser = () => {
    return signOut(auth);
  };

  //use state manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
      }
    });
    return unsubscribe();
  }, [auth]);

  const allData = {
    user,
    setUser,
    createUser,
    updateUser,
    userSignin,
    userWithGoogle,
    userWithGithub,
    signOutUser,
    loading,
    setLoading,
    error,
    setError,
  };

  const backendData = { recipeData };
  return (
    <PassContextParams.Provider value={allData}>
      <DataPassContext.Provider value={backendData}>
        {children}
      </DataPassContext.Provider>
    </PassContextParams.Provider>
  );
};

export default ContextPass;
