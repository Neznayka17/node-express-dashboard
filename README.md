# Node real-time log dashboard

Source <code>https://app.pluralsight.com/projects/build-real-time-log-dashboard-with-node-and-express</code>
Pluralsight course requires access to github.  Create an account.
To push your changes to github you'll need to fix authentication by creating a developer token.
Replace the url in the github repo
to see current URL:<code>git remote -v</code>
see <code>https://stackoverflow.com/a/68192528/1077444</code>
My settings:
<code>
$ git remote -v
origin  https://a-z1-9@github.com/myGitUsername/node-express-dashboard (fetch)
origin  https://a-z1-9@github.com/myGitUsername/node-express-dashboard (push)
</code>

To start the application, in a terminal type: <code>npm start</code>

Then, in a browser, go to: <code>http://localhost:3000/</code>

Follow the <b>Select File</b> link and open the <b>log-generator>sample.log</b> file

### Note: This project was generated with <b>express-generator</b>, e.g.
```
$ express --view=ejs log-dashboard
```