import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchUserRequest } from "../../redux/users/usersActions";
import { getUsers } from "../../redux/users/usersSelectors";
import UserLink from "../../components/User/UserLink";
import styles from "../UsersPage/UsersPage.module.scss";

function UsersPage() {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);
  useEffect(() => {
    if (isFetching) {
      let page = Number(searchParams.get("page"));
      page += 1;

      dispatch(fetchUserRequest({ page, results: 10 }));
      setSearchParams(`page=${page}`);
      setIsFetching(false);
    }
  }, [isFetching, dispatch, searchParams, setSearchParams]);
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = (event: Event) => {
    const target = (event.target as Document).documentElement;

    if (target.scrollHeight - (target.scrollTop + window.innerHeight) < 100) {
      setIsFetching(true);
    }
  };
  return (
    <div className={styles.list}>
      {users.map((user) => (
        <UserLink key={user.login.uuid} user={user} />
      ))}
    </div>
  );
}

export default UsersPage;
