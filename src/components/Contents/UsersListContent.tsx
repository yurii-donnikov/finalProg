import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchUserRequest } from "../../redux/users/usersActions";
import { getUsers } from "../../redux/users/usersSelectors";
import UserLink from "../../components/User/UserLink";

function UsersListContent() {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const [params, setSearchParams] = useSearchParams();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  useEffect(() => {
    if (isFetching) {
      let page = Number(params.get("page"));
      page += 1;
      dispatch(fetchUserRequest({ page, results: 10 }));
      setSearchParams(`page=${page}`);
      setIsFetching(false);
    }
  }, [isFetching, dispatch, params, setSearchParams]);

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

  return <UserLink users={users} />;
}

export default UsersListContent;
