import React from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import {
    loginGoogle,
    accountStore,
    getProfile,
    postLogout,
    onLogOutRemoveData,
    postLogin,
    postRegister,
} from "features";
import { LoginType, RegisterType } from "type";
import { handleGetHashCode } from "const";

const xs = handleGetHashCode();
export const UseAccount = () => {
    const dispatch = useAppDispatch();

    const resultAccount = useAppSelector(accountStore);
    const { accessToken, loading, loadingGoogle, data } = resultAccount;

    // dispatch api
    const handlePostLogin = (data: LoginType) => dispatch(postLogin(data));
    const handlePostRegister = (data: RegisterType) => dispatch(postRegister(data));
    const handleOnLogOut = React.useCallback(
        () => accessToken && dispatch(onLogOutRemoveData()) && dispatch(postLogout()),
        [dispatch, accessToken]
    );
    const loginGoogleAPI = React.useCallback((token: string) => dispatch(loginGoogle(token)), [dispatch]);
    const getProfileAPI = React.useCallback(() => xs && dispatch(getProfile()), [dispatch]);

    const responseGoogle = (response: any) => {
        const { access_token } = response;
        if (access_token) loginGoogleAPI(access_token);
    };

    return {
        resultAccount,
        handleOnLogOut,
        loginGoogleAPI,
        responseGoogle,
        handlePostLogin,
        getProfileAPI,
        handlePostRegister,
        accessToken,
        loading,
        loadingGoogle,
        dataAccount: data,
    };
};
