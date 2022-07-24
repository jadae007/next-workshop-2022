import Layout from "@/components/layout/Layout";
import { userSelector,resetUsername,signUp} from "@/store/slices/userSlice";
import { useAppDispatch } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function Index({}: Props) {
  const user = useSelector(userSelector);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <div>Hello {user.username}</div>
      <button onClick={() =>dispatch(resetUsername({data:"Tanapong"}))}>Reset</button>
      <button onClick={() =>dispatch(signUp({username:"admin",password:"1234"}))}>signUp</button>
    </Layout>
  );
}
