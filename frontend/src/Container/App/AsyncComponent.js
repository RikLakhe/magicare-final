import loadable from 'react-loadable'
import LoadingComponent from '../../Components/Loading'

export const AsyncHome = loadable({
    loader : () => import(`../Home/`),
    loading: LoadingComponent
});

export const AsyncLogin = loadable({
    loader : () => import(`../Auth/LoginPageContainer`),
    loading: LoadingComponent
});

export const AsyncSignUp = loadable({
    loader : () => import(`../Auth/SignUpContainer`),
    loading: LoadingComponent
});