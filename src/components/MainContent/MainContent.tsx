import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Path } from "../../constants/path";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import Container from "../Container/Container";

const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const UsersPage = lazy(() => import("../../pages/UsersPage/UsersPage"));
const UserInfoPage = lazy(
  () => import("../../pages/UserInfoPage/UserInfoPage")
);

function MainContent() {
  return (
    <Container>
      <main>
        <Routes>
          <Route
            path={Path.LOGIN}
            element={<PublicRoute component={LoginPage} />}
          />
          <Route
            path={Path.USERS}
            element={<PrivateRoute component={UsersPage} />}
          />
          <Route
            path={Path.USER_INFO}
            element={<PrivateRoute component={UserInfoPage} />}
          />
          <Route
            path={Path.USER_ID}
            element={<PrivateRoute component={UserInfoPage} />}
          />
          <Route path="/" element={<Navigate replace to={Path.LOGIN} />} />
        </Routes>
      </main>
    </Container>
  );
}

export default MainContent;
