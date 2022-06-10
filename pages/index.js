export default function Home() {
  // TODO add tooltips to explain what it means to be "approved" and "verified" (see below)
  return (
    <div>
      <h1>
        This app allows V School Staff to view Progress Data for V School
        Students.
      </h1>
      <br />
      <h2>
        <span
          style={{
            backgroundColor: 'red',
            color: 'white',
          }}
        >
          DEMO MODE
        </span>
      </h2>
      <ul>
        <li>
          If you have not logged in with an approved (and verified) Email
          address, you will be in&nbsp;
          <span style={{ backgroundColor: 'red', color: 'white' }}>
            DEMO MODE
          </span>
          .
        </li>
        <li>
          In&nbsp;
          <span style={{ backgroundColor: 'red', color: 'white' }}>
            DEMO MODE
          </span>
          &nbsp;you <b>CAN</b> try out all the features of this website...
        </li>
        <li>
          However the data you see will be randomly generated, not actual data
          for actual students.
        </li>
      </ul>
      <h2>
        <u>Initial Sign Up Instructions...</u>
      </h2>
      <ul>
        <li>
          Assuming your email address is on our Whitelist, you can Sign Up by
          clicking the &quot;Sign In&quot; button at the Top Right of this page.
        </li>
        <li>
          You will then be re-directed an Auth0 Login/SignUp UI where you can
          create an account.
        </li>
        <li>
          At the bottom of the Auth0 Login/SignUp UI, click on the Blue
          &quot;Sign Up&quot; text.
        </li>
        <li>
          After you Sign Up with a new account, you will be re-directed back to
          this website.
        </li>
        <li>
          <span style={{ backgroundColor: 'yellow' }}>
            However you must also verify your email address before you can view
            actual Student Data.
          </span>
        </li>
        <li>
          <span style={{ backgroundColor: 'yellow' }}>
            Check your inbox (or your spam folder) for an email with a
            verification link and click on it.
          </span>
        </li>
      </ul>
    </div>
  );
}
