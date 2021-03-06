import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { pink } from "@material-ui/core/colors";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";
import { Avatar } from "@material-ui/core";
import Link from "next/link";
import { signin, signout, useSession } from "next-auth/client";

export default function header() {
  const [session, loading] = useSession();

  return (
    <>
      {/* <div className="header">
        <Link href="/">
          <a>
            <img
              className="header__icon_large"
              src="https://hostguest.co.ke/wp-content/uploads/2018/12/hostguest-logo-2-300x87.png"
              alt="HostGuest"
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <img
              className="header__icon_small"
              src="/images/Host Guest Stationery 61218-05.png"
              alt="HostGuest"
            ></img>
          </a>
        </Link>

        <div className="header__center">
          <input type="text" />
          <SearchRoundedIcon style={{ color: pink[300] }} />
        </div>

        <div className="header__right">
          <p>Become a Host</p>
          <LanguageRoundedIcon style={{ color: pink[300] }} />
          <ExpandMoreRoundedIcon />
          <Avatar />
        </div>
      </div> */}
      <header className="lg:px-px px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center">
          <Link href="/">
            <a>
              <img
                className="header__icon_large"
                src="https://hostguest.co.ke/wp-content/uploads/2018/12/hostguest-logo-2-300x87.png"
                alt="HostGuest"
              />
            </a>
          </Link>
        </div>
        <label for="menu-toggle" className="cursor-pointer  lg:hidden block">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </label>
        <input type="checkbox" className="hidden" id="menu-toggle"></input>
        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <div className="header__center">
                  <input type="text" />
                  <SearchRoundedIcon style={{ color: pink[300] }} />
                </div>
              </li>
            </ul>
          </nav>
          <div className="header__right">
            <p>Become a Host</p>
            <LanguageRoundedIcon style={{ color: pink[300] }} />
            <ExpandMoreRoundedIcon />
          </div>
          {!session && (
            <a
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signin();
              }}
            >
              <a className="w-40 h-25 flex flex-row items-center justify-center rounded-lg bg-pink-700 text-white">Sign Up</a>
            </a>
          )}

          {session && (
            <div className="header__right lg:ml-4 flex lg:mb-0 mb-4 cursor-pointer">
              <span
                style={{ backgroundImage: `url(${session.user.image})` }}
                className="avatar"
              ></span>

              <a
                href="/api/auth/signout"
                className="w-1/2 flex items-center justify-center rounded-full bg-pink-700 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  signout();
                }}
              ></a>
              <span>{session.user.name}</span>
            </div>
          )}
        </div>
      </header>
      <style jsx>{`
        #menu-toggle:checked + #menu {
          display:inline-block;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          background-color: white;
          z-index: 100;
          width: 100%;
        }
        .header__icon_large {
          object-fit: contain;
          height: 50px;
          margin-left: 20px;
          padding: 10px;
        }
        .header__icon_small {
          object-fit: contain;
          height: 50px;
          margin-left: 20px;
          padding: 10px;
        }
        .header__center {
          display: flex;
          flex: 1;
          align-items: center;
          max-width: fit-content;
          padding: 10px;
          height: 30px;
          border: 1px solid lightgrey;
          border-radius: 999px;
        }

        .header__center > input {
          border: none;
          
          outline-width: 0;
        }

        .header__right {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 15vw;
          margin-right: 80px;
        }
        }
      `}</style>
    </>
  );
}
