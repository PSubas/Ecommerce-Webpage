import { CacheProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AuthConsumer, AuthProvider } from "src/contexts/auth-context";
import { useNProgress } from "src/hooks/use-nprogress";
import { createTheme } from "src/theme";
import { createEmotionCache } from "src/utils/create-emotion-cache";
import "simplebar-react/dist/simplebar.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "/public/assets/styles/card.css";
import "/public/assets/styles/carausel.css";
import "/public/assets/styles/starRating.css";
import "/public/assets/styles/counterCard.css";
import "/public/assets/styles/singleProduct.css";
import "/public/assets/styles/footer.css";
import { Store } from "../redux/store/store";
import { Provider } from "react-redux";
import Page from ".";

import { ErrorBoundary } from "react-error-boundary";

const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => null;

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();

  return (
    <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
      <Provider store={Store}>
        <CacheProvider value={emotionCache}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <AuthProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthConsumer>
                  {(auth) =>
                    auth.isLoading ? <SplashScreen /> : getLayout(<Component {...pageProps} />)
                  }
                </AuthConsumer>
                {/* <Page /> */}
              </ThemeProvider>
            </AuthProvider>
          </LocalizationProvider>

          <ToastContainer />
        </CacheProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
