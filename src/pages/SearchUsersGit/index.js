import "./style.scss";
import UserSearch from "../../components/UserSearch";
import UserRepo from "../../components/UserRepo";

function SearchUsersGit() {
  return (
    <div className="container">
      <header className="container__header">
        <h1 className="container__title">Welcome!</h1>
      </header>

      <div className="container__content">
        <section className="container__section__repo">
          <div className="content-card-repo">
            <UserRepo />
          </div>
        </section>
        <section className="container__section__user">
          <div className="content-card-user">
            <UserSearch />
          </div>
        </section>
        <section className="container__section__starred">
          <div className="content-card-starred">starred</div>
        </section>
      </div>
    </div>
  );
}

export default SearchUsersGit;
