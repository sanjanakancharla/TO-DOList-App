<table><tr><td> <em>Assignment: </em> IS601 Milestone1 Deliverable</td></tr>
<tr><td> <em>Student: </em> Abhinav Chowdawaram (ac2526)</td></tr>
<tr><td> <em>Generated: </em> 12/11/2022 9:35:18 PM</td></tr>
<tr><td> <em>Grading Link: </em> <a rel="noreferrer noopener" href="https://learn.ethereallab.app/homework/IS601-005-F22/is601-milestone1-deliverable/grade/ac2526" target="_blank">Grading</a></td></tr></table>
<table><tr><td> <em>Instructions: </em> <ol><li>Checkout Milestone1 branch</li><li>Create a milestone1.md file in your Project folder</li><li>Git add/commit/push this empty file to Milestone1 (you'll need the link later)</li><li>Ensure your images display correctly in the sample markdown at the bottom</li><ol><li>NOTE: You may want to try to capture as much checklist evidence in your screenshots as possible, you do not need individual screenshots and are recommended to combine things when possible. Also, some screenshots may be reused if applicable.</li></ol><li>Save the submission items</li><li>Copy/paste the markdown from the "Copy markdown to clipboard link" or via the download button</li><li>Paste the code into the milestone1.md file or overwrite the file</li><li>Git add/commit/push the md file to Milestone1</li><li>Double check the images load when viewing the markdown file (points will be lost for invalid/non-loading images)</li><li>Make a pull request from Milestone1 to dev and merge it (resolve any conflicts)<ol><li>Make sure everything looks ok on heroku dev</li></ol></li><li>Make a pull request from dev to prod (resolve any conflicts)<ol><li>Make sure everything looks ok on heroku prod</li></ol></li><li>Submit the direct link from github prod branch to the milestone1.md file (no other links will be accepted and will result in 0)</li></ol></td></tr></table>
<table><tr><td> <em>Deliverable 1: </em> Feature: User will be able to register a new account </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add one or more screenshots of the application showing the form and validation errors per the feature requirements</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206919845-677a7043-0409-4543-86d3-288fe12e0695.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>invalid email validation<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206919858-eeb67eff-b0c9-485c-9bc7-5c2be48c5c60.png"/></td></tr>
<tr><td> <em>Caption:</em> <p> invalid password validation<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206919876-0de6f089-415f-414f-ab93-6e61e65b104f.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>passwords not much validation<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206919897-d6e20e96-6575-4ed3-8bd4-ba6a659d6230.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>email not available validation (already registered)<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206919921-80b62dc3-2209-40bf-8777-85c45ff9ca80.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>username not available validation (username is taken)<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206920302-94380674-8ff8-4deb-939f-727f5d36e181.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>the form with valid data filled in before the form is submitted<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206920466-c338fdc9-fb87-40a8-ba65-e35e8ac28993.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Success message after registration<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add a screenshot of the Users table with data in it</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206920651-4cf0758e-5b5b-42bb-becb-8ee8ebe7a802.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>The valid user data from Task 1 that is present in this screenshot.<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 3: </em> Add the related pull request(s) for this feature</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/51">https://github.com/AbhinavC12/IS601-005-31597122/pull/51</a> </td></tr>
<tr><td> <em>Sub-Task 4: </em> Explain briefly how the process/code works</td></tr>
<tr><td> <em>Response:</em> <p>-We utilize WT-forms for form generation and validation. The form submission will attempt<br>to deliver data to our Python POST route, which will extract the data<br>and run an insert query to our sample table.<div>- WT-form validators are used<br>to validate data both in frontend &amp; backend, username is validated to be<br>of length between 2 &amp; 30 characters and it shouldn&#39;t be previously used<br>by another user, email validation is done using an email validator.</div><div>- password &amp;<br>confirm password should both be the same and should be of a length<br>of 8, This is validated using wtform validators and it is stored in<br>the database after hashing it using the bcrypt hashing algorithm</div><div>- email, username, and<br>hashed password is stored in the users table.</div><div><br></div><br></p><br></td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 2: </em> Feature: User will be able to login to their account </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add one or more screenshots of the application showing the form and validation errors per the feature requirements</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921637-19a6c2af-49b8-4fb0-ab08-8f0dc2f3bd26.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Showing password mismatch validation (doesn&#39;t match what&#39;s in the DB)<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921645-54d36097-7b7f-42b1-848f-4e02fccce0e6.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Showing validation based on non-existing user<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add a screenshot of successful login</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921664-7318e0c3-e926-4866-9e93-dcbcdb62a714.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot of successful login<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 3: </em> Add the related pull request(s) for this feature</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/51">https://github.com/AbhinavC12/IS601-005-31597122/pull/51</a> </td></tr>
<tr><td> <em>Sub-Task 4: </em> Explain briefly how the process/code works</td></tr>
<tr><td> <em>Response:</em> <div>- We have handled the login form using wt forms, which is similar<br>to how we handle register forms, but we'll utilize the username or email<br>field instead of the confirm password field.</div><div><br></div><div>- In the front end, if the<br>username or email field checks if data is entered or not, and if<br>the field has '@' it will use an email validator else it checks<br>for the username format, if the length is between 2 &amp; 30 or<br>not, and checks if the password is entered or not.&nbsp;</div><div>In the backend, we<br>fetch the data from the users table by passing the email/username, if we<br>get something we compare the password &amp;then check if the user is assigned<br>roles<br></div><div><br></div><div>- In the front end, we first check if the password is entered<br>&amp; then in the back we fetch the password from the database based<br>on username/email &amp; then check if the passwords match, if they match then<br>we delete the password from that point in the program.</div><div><br></div><div>- we fetch username,<br>email, password from users table passing username/email, and then check if passwords match,<br>and then check if the user is assigned is any roles from userroles<br>tables &amp; fetch it.</div><div><br></div><br></td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 3: </em> Feat: Users will be able to logout </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add a screenshot showing the successful logout message</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921677-0193d4a0-aef9-4515-aaae-2158ab5f6406.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Message showing something about being logged out<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add a screenshot showing the logged out user can't access a login-protected page</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921700-c147af1b-1c4c-41ae-99fc-d93e1649dd07.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Message showing something about not being logged in<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 3: </em> Add the related pull request(s) for this feature</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/51">https://github.com/AbhinavC12/IS601-005-31597122/pull/51</a> </td></tr>
<tr><td> <em>Sub-Task 4: </em> Explain briefly how the process/code works</td></tr>
<tr><td> <em>Response:</em> <div>we use flask_login package to work with user session &amp; manage it,&nbsp;</div><div>In our<br>main.py we’ll utilize LoginManager, this handles our user session and provides helpful utilities</div><div>Since<br>we’re using an app factory we’ll defined a variable for login_manager outside of<br>the factory, then inside the factory we use its init_app() method to associate<br>the app</div><div>Next, inside of the app factory we’ll use the user_loader decorator, this<br>will run a process to lookup a user by id</div><div><br></div><br></td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 4: </em> Feature: Basic Security Rules Implemented / Basic Roles Implemented </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add a screenshot showing the logged out user can't access a login-protected page (may be the same as similar request)</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921700-c147af1b-1c4c-41ae-99fc-d93e1649dd07.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Message showing something about not being logged in<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add a screenshot showing a user without an appropriate role can't access the role-protected page</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921829-b0e0be4d-13db-4999-995c-463b32de42ed.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Message showing something about not having proper role or permission (i.e., different than<br>the not logged in message)<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 3: </em> Add a screenshot of the Roles table with valid data</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921888-c5f70a01-c177-4f8e-a090-b979de2c7a67.png"/></td></tr>
<tr><td> <em>Caption:</em> <p> screenshot of the Roles table with valid data having at least one<br>valid record from the lessons (i.e., Admin)<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 4: </em> Add a screenshot of the UserRoles table with valid data</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921912-541f7d40-9c01-4c28-9c00-7267b927e78e.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot of the UserRoles table with valid data<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 5: </em> Add the related pull request(s) for these features</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/54">https://github.com/AbhinavC12/IS601-005-31597122/pull/54</a> </td></tr>
<tr><td> <em>Sub-Task 6: </em> Explain briefly how the process/code works for login-protected pages</td></tr>
<tr><td> <em>Response:</em> <div>Since we’re using an app factory we’ll defined a variable for login_manager outside<br>of the factory, then inside the factory we use its init_app() method to<br>associate the app,&nbsp;</div><div>For the login protected pages, we decorate the views with @login_required<br>function, If the user is not logged in, it calls the LoginManager.unauthorized function.</div><div><br></div><br></td></tr>
<tr><td> <em>Sub-Task 7: </em> Explain briefly how the process/code works for role-protected pages</td></tr>
<tr><td> <em>Response:</em> <div>similar to login protected page, here we use @admin_permission_require function from roles.permissions package,&nbsp;</div><div>If<br>the user is not a admin,&nbsp; we raise 403 exception and display 403<br>html page saying permission denied.</div><div><br></div><br></td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 5: </em> Feature: Site should have basic styles/theme applied; everything should be styled </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add screenshots to show examples of your site's styles/theme</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206932149-282e2d43-b602-4923-9214-4465cf051dff.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot showing Navigation bar with basic styles and with a clean UI<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206938449-b2d3576f-dcca-430d-bb23-f9e5ae7f3600.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot showing a forms which represents the profile page of the user/admin and<br>with a clean UI<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206938556-906079cd-e2be-4c70-9c26-dc512298ac2a.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Data output of sample lists and with a clean UI<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add the related pull request(s) for this feature</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/54">https://github.com/AbhinavC12/IS601-005-31597122/pull/54</a> </td></tr>
<tr><td> <em>Sub-Task 3: </em> Briefly explain your CSS at a high level</td></tr>
<tr><td> <em>Response:</em> <p>using Bootstrap, a navigation bar can extend or collapse, depending on the screen<br>size. A standard navigation bar is created with the .navbar class,<div>followed by a<br>responsive extend and collapsing class</div><div>collapse. navbar-collapse for grouping and hiding navbar contents by<br>a parent breakpoint.<br></div><div><div>navbar-brand for your company, product, or project name.</div><div>navbar-toggler for use with<br>our collapse plugin and other navigation toggling behaviors.</div><div>Using the nav-item class allows developers<br>to quickly change between different types of navigation in the bootstrap system while<br>only changing the wrapping class on the &lt;ul&gt; .</div>and&nbsp;Containers are a fundamental building<br>block of Bootstrap that contain, pad, and align your content within a given<br>device or viewport.</div><div><br></div><br></p><br></td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 6: </em> Feature: Any output messages/errors should be "user friendly" </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add screenshots of some examples of errors/messages</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921700-c147af1b-1c4c-41ae-99fc-d93e1649dd07.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Message showing something about not being logged in<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921829-b0e0be4d-13db-4999-995c-463b32de42ed.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Message showing something about not having proper role or permission (i.e., different than<br>the not logged in message)<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921637-19a6c2af-49b8-4fb0-ab08-8f0dc2f3bd26.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>flash error pop ups when entered wrong password<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add a related pull request</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/54">https://github.com/AbhinavC12/IS601-005-31597122/pull/54</a> </td></tr>
<tr><td> <em>Sub-Task 3: </em> Briefly explain how you made messages user friendly</td></tr>
<tr><td> <em>Response:</em> <div><span style="white-space: pre-wrap;">To better handle this, we have created two functions in main.py<br>that’ll return a render_template() to new respective files for 403 (access denied) and<br>404 (page not found)</span></div><div><span style="white-space: pre-wrap;">For sake of simplicity ,these files are identical<br>and just have a basic user friendly messages applied, can customize these as<br>we wish</span></div><div><span style="white-space: pre-wrap;">The main purpose for this is to include our navigation<br>to allow our user to easily navigate to a proper location.</span></div><div><span style="white-space: pre-wrap;">And<br>also included some flash messages which will guide the users where they did<br>wrong and which helps then recorrect the data.</span></div><br></td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 7: </em> Feature: Users will be able to see their profile </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add screenshots of the User Profile page</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206921966-1e0e2bdc-c0a1-48f9-9d61-397ae56b5e41.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>user profile page where Email and username are properly prefilled<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add the related pull request(s) for this feature</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/56">https://github.com/AbhinavC12/IS601-005-31597122/pull/56</a> </td></tr>
<tr><td> <em>Sub-Task 3: </em> Explain briefly how the process/code works (view only)</td></tr>
<tr><td> <em>Response:</em> <div>when profile page is opened, if it is not a POST request then<br>email, username are fetched from users table passing user id, then the are<br>rendered into the profile form.</div><div><br></div><br></td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 8: </em> Feature: User will be able to edit their profile </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add screenshots of the User Profile page validation messages and success messages</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206941534-6fbefbb8-b873-4851-b2cd-53192467bc12.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>showing username changed message which tells that username validated<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206922487-ac7d3a5d-ef32-45f1-a06d-22d00b2b270d.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>showing email changed message which tells that email validated<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206941754-bbb8479b-cc88-44c8-b8d9-cafccf10110a.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>showing password changed message which tells that password is validated<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206941878-d8e3d5f9-6f26-4305-963a-477ec262bdc9.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>password mismatch message<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206942087-a51b17d3-c20b-4f0f-9bce-c9a060519432.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Showing email already in use message<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206942263-30c166ba-a233-4f22-be32-d4f4d9205c9d.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Showing username already in use message<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add before and after screenshots of the Users table when a user edits their profile</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206922655-d83ffb7d-e86e-4004-a319-87f9e742d11d.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>user2 before edit in 4th place<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/206922663-09e09397-966e-4d97-afd4-ae8ba82a7853.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>user2 after editing in the 4th place<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 3: </em> Add the related pull request(s) for this feature</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/56">https://github.com/AbhinavC12/IS601-005-31597122/pull/56</a> </td></tr>
<tr><td> <em>Sub-Task 4: </em> Explain briefly how the process/code works (edit only)</td></tr>
<tr><td> <em>Response:</em> <div>the code first checks for if it is POST request, if it is,<br>then it checks if current_password, password &amp; confirm are given, then it retrieves<br>password from users table, then the current password &amp; pwd from DB are<br>compared to check if they are the same or not, if they are<br>not same we will raise a invalid password flask, if they are same<br>then the new password is hashed &amp; updated in the database.</div><div>Then the username<br>&amp; email are updated in the database and a flash message "saved profile"<br>is displayed.</div><br></td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 9: </em> Misc </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Describe any issues and learnings throughout this milestone</td></tr>
<tr><td> <em>Response:</em> <p>By doing this milestone I have got a chance to learn about user<br>login session,&nbsp;login/registration system, an authentication system<div>Able to integrate the DB utility and manage<br>the website by storing and retrieving the data from the database&nbsp;</div><br></p><br></td></tr>
<tr><td> <em>Sub-Task 2: </em> Prod Application Link to Login Page</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://is601-ac2526-finalproj-prod.herokuapp.com/login">https://is601-ac2526-finalproj-prod.herokuapp.com/login</a> </td></tr>
</table></td></tr>
<table><tr><td><em>Grading Link: </em><a rel="noreferrer noopener" href="https://learn.ethereallab.app/homework/IS601-005-F22/is601-milestone1-deliverable/grade/ac2526" target="_blank">Grading</a></td></tr></table>
