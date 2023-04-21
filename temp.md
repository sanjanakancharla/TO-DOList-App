<table><tr><td> <em>Assignment: </em> IS601 Milestone 2 Shop Project</td></tr>
<tr><td> <em>Student: </em> Abhinav Chowdawaram (ac2526)</td></tr>
<tr><td> <em>Generated: </em> 12/22/2022 1:29:38 PM</td></tr>
<tr><td> <em>Grading Link: </em> <a rel="noreferrer noopener" href="https://learn.ethereallab.app/homework/IS601-005-F22/is601-milestone-2-shop-project/grade/ac2526" target="_blank">Grading</a></td></tr></table>
<table><tr><td> <em>Instructions: </em> <ol><li>Checkout Milestone2 branch</li><li>Create a new markdown file called milestone2.md</li><li>git add/commit/push immediate</li><li>Fill in the below deliverables</li><li>At the end copy the markdown and paste it into milestone2.md</li><li>Add/commit/push the changes to Milestone2</li><li>PR Milestone2 to dev and verify</li><li>PR dev to prod and verify</li><li>Checkout dev locally and pull changes to get ready for Milestone 3</li><li>Submit the direct link to this new milestone2.md file from your GitHub prod branch to Canvas</li></ol><p>Note: Ensure all images appear properly on github and everywhere else. Images are only accepted from dev or prod, not local host. All website links must be from prod (you can assume/infer this by getting your dev URL and changing dev to prod).</p></td></tr></table>
<table><tr><td> <em>Deliverable 1: </em> Users with admin or shop owner will be able to add products </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add screenshot of admin create item page</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209051388-67fb5033-f1ca-4df6-b1f3-528dac3d0db8.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Admin create page with a valid data in it<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add screenshot of populated Products table clearly showing the columns</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209051452-eb001035-fbac-443f-bd78-18a0054361d3.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Screenshot showing all the products and the latest added product is highlighted in<br>the last<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 3: </em> Briefly describe the code flow for creating a Product</td></tr>
<tr><td> <em>Response:</em> <p>The values are sent to the item function in shop.py after being entered<br>on the add page. To determine if the action is to edit or<br>add, it looks to see if an id has been passed. This is<br>a create action since no id is supplied; hence, an INSERT statement is<br>executed passing the values to the Products table, and if successful, a flash<br>is shown.<br></p><br></td></tr>
<tr><td> <em>Sub-Task 4: </em> Add related pull request link(s)</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/62">https://github.com/AbhinavC12/IS601-005-31597122/pull/62</a> </td></tr>
<tr><td> <em>Sub-Task 5: </em> Add a direct link to heroku prod for this file</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://is601-ac2526-finalproj-prod.herokuapp.com/admin/item">https://is601-ac2526-finalproj-prod.herokuapp.com/admin/item</a> </td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 2: </em> Any user can see visible products on the Shop Page </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add a screenshot of the Shop page showing 10 items without filters/sorting applied</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209052139-454a0b32-6adb-44fb-adf8-e0f8f74bba2d.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot of the Shop page showing items without filters/sorting applied<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209052152-e20e0112-8db6-46a3-892d-6ba65070b02c.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot of the Shop page showing items without filters/sorting applied<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add a screenshot of the Shop page showing both filters and a different sorting applied (should be more than 1 sample product)</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209052352-abb9f2cd-f1c9-49dd-a0fd-7d1f825c49f1.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot of the Shop page showing both filter with Electronics and sorted from<br>low to high price<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209052369-23403d6c-4f04-43d9-976c-3eed69ca3bb4.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot of the Shop page showing both filter with food and sorted from<br>high to low<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 3: </em> Add a screenshot of the filter/sort logic from the code</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209054472-a88b011a-f01e-4cd1-a1d1-5112f1308da8.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot of the filter/sort logic from the code<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 4: </em> Briefly explain how the results are shown and how the filters are applied</td></tr>
<tr><td> <em>Response:</em> <p>Initial data for the shop page comes from the Products table, whose visibility<br>is set to 1. Moreover, the page allows for name searches, category selections,<br>and price &quot;High to Low&quot; or &quot;Low to High&quot; sorting. When we use<br>one or more of the aforementioned search options. We proceed to the shop.py<br>function&#39;s shop list and modify the query&#39;s where condition based on the input.<br>and then show the outcomes once more.<br></p><br></td></tr>
<tr><td> <em>Sub-Task 5: </em> Add related pull request link(s)</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/62">https://github.com/AbhinavC12/IS601-005-31597122/pull/62</a> </td></tr>
<tr><td> <em>Sub-Task 6: </em> Add a direct link to heroku prod for this file</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://is601-ac2526-finalproj-prod.herokuapp.com/shop?name=&category=Electronics&price=ASC">https://is601-ac2526-finalproj-prod.herokuapp.com/shop?name=&category=Electronics&price=ASC</a> </td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 3: </em> Show Admin/Shop Owner Product List (this is not the Shop page and should show visibility status) </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Screenshot of the Admin List page/results</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209055577-765a2208-8030-4312-8c88-ab723d43ab20.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Screenshot of the Admin List page/results<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Briefly explain how the results are shown</td></tr>
<tr><td> <em>Response:</em> <div>Without applying any filters, we choose every field from the Products database and<br>feed it to the HTML page.</div><div>Since no conditions are stated anywhere, every product<br>will be shown regardless of visibility status.</div><br></td></tr>
<tr><td> <em>Sub-Task 3: </em> Add related pull request link(s)</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/62">https://github.com/AbhinavC12/IS601-005-31597122/pull/62</a> </td></tr>
<tr><td> <em>Sub-Task 4: </em> Add a direct link to heroku prod for this file</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://is601-ac2526-finalproj-prod.herokuapp.com/admin/items">https://is601-ac2526-finalproj-prod.herokuapp.com/admin/items</a> </td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 4: </em> Admin/Shop Owner Edit button </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add a screenshot showing the edit button visible to the Admin on the Shop page</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209055784-756a6a7f-f6ee-4d18-8204-df3e0d886f89.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot showing the edit button visible to the Admin on the Shop<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add a screenshot showing the edit button visible to the Admin on the Product Details Page</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209055860-79e8b480-4ee2-4e4b-8fae-7ce565ec06e9.png"/></td></tr>
<tr><td> <em>Caption:</em> <p> screenshot showing the edit button visible to the Admin on the Product<br>Details Page<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 3: </em> Add a screenshot showing the edit button visible to the Admin on the Admin Product List Page (The admin page)</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209055915-eea7579c-0240-406b-925d-d017cf8a80bd.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Add a screenshot showing the edit button visible to the Admin on the<br>Admin Product List Page (The admin page)<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 4: </em> Add a before and after screenshot of Editing a Product via the Admin Edit Product Page</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209056008-af3d7cac-9df9-4ab5-8a57-cf1ec7b35e95.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Screenshot showing the edit page with present details of the product DEERC Drone<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209057221-4b7cc31e-8baf-4500-ab5b-3a8f36cbbb98.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot showing the list of products before editing the product DEERC Drone<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209056043-68d0c524-486f-4dcc-b1fe-3a89e28dada0.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Screenshot showing the edit page with changed details of the product DEERC Drone<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209056052-ee53fdf6-3e18-4dee-8378-8645ed2a54b0.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot showing the list of products after editing the product DEERC Drone<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 5: </em> Briefly explain the code process/flow</td></tr>
<tr><td> <em>Response:</em> <div>Every product in shop.html has a check to see whether the user is<br>logged in and if they are an admin. If both are true, we<br>display an edit button that takes the user to the item page with<br>the product details.</div><div>The edit button is displayed on the item details page if<br>the user is an admin.</div><div>Since only administrators can access the page, the edit<br>button is the default on the admin items page.</div><br></td></tr>
<tr><td> <em>Sub-Task 6: </em> Add related pull request link(s)</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/62">https://github.com/AbhinavC12/IS601-005-31597122/pull/62</a> </td></tr>
<tr><td> <em>Sub-Task 7: </em> Add a direct link to heroku prod for this file</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://is601-ac2526-finalproj-prod.herokuapp.com/itemdetails?id=1">https://is601-ac2526-finalproj-prod.herokuapp.com/itemdetails?id=1</a> </td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 5: </em> Product Details Page </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add a screenshot showing the button (clickable item) that directs the user to the Product Details Page</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209179499-69888c93-138b-4e99-925a-045f501def8a.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot showing the button (clickable item) that directs the user to the Product<br>Details Page<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add a screenshot showing the result of the Product Details Page</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209179586-4fcdeaba-3cc9-4efa-8154-0631818223d4.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot showing the result of the Product JBL Wireless In-Ear Headphones Details Page<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 3: </em> Briefly explain the code process/flow</td></tr>
<tr><td> <em>Response:</em> <div>For this, I made the itemdetails.html and item details functions.</div><div>The product name has<br>been made clickable; when clicked, it will send the product id to the<br>item details function, which will retrieve all the information from the Products database<br>using the id and display it on the item details page.</div><br></td></tr>
<tr><td> <em>Sub-Task 4: </em> Add related pull request link(s)</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/62">https://github.com/AbhinavC12/IS601-005-31597122/pull/62</a> </td></tr>
<tr><td> <em>Sub-Task 5: </em> Add a direct link to heroku prod for this file (can be any specific item)</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://is601-ac2526-finalproj-prod.herokuapp.com/itemdetails?id=3">https://is601-ac2526-finalproj-prod.herokuapp.com/itemdetails?id=3</a> </td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 6: </em> Add to Cart </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add a screenshot of the success message of adding to cart</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209059402-286a906e-937a-4c3c-af94-ca33bcaf5a97.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot of the success message of adding JBL Wireless In-Ear Headphones to cart<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add a screenshot of the error message of adding to cart (i.e., when not logged in)</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209059472-5e25243e-18e5-40a9-a942-57670240a604.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot of the error message of adding to cart when not logged in<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 3: </em> Add a screenshot of the Cart table with data in it</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209059565-6d617379-8056-4b26-af4d-3554f64582f5.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot of the Cart table with data in it<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 4: </em> Tell how your cart works (1 cart per user; multiple carts per user)</td></tr>
<tr><td> <em>Response:</em> <p>Product id and user id serve as the composite unique key for one<br>cart per user.<div>And receives the products from the shop whenever a user is<br>added to the cart a insert query will perform that inserts the data<br>into the cart. and also perform an update and delete queries when a<br>user wants to update quantity or delete a product.</div><br></p><br></td></tr>
<tr><td> <em>Sub-Task 5: </em> Explain the process of add to cart</td></tr>
<tr><td> <em>Response:</em> <p style="font-variant-numeric: normal; font-variant-east-asian: normal;"><font face="Times New Roman"><span style="font-size: 16px;">When the amount field<br>is provided to the cart function in shop.py by clicking the ADD button,<br>the product id is passed as a hidden field and as long as<br>the quantity is larger than 0, we insert the product id, user id,<br>desired quantity, and unit price (fetching it from products table)</span></font><br></p><br></td></tr>
<tr><td> <em>Sub-Task 6: </em> Add related pull request link(s)</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/62">https://github.com/AbhinavC12/IS601-005-31597122/pull/62</a> </td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 7: </em> User will be able to see their Cart </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add screenshot of the Cart View</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209059752-670e0e4b-ff0a-44ac-8538-7edad5a6c686.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot of the Cart View with subtotal of each line and adding up,<br>cart total,  link to product details page for each product<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Explain how the cart is being shown from a code perspective along with the subtotal and total calculations</td></tr>
<tr><td> <em>Response:</em> <div>When we click the cart, the function checks to see if a product<br>id is being passed and, if it isn't, it recognizes that this isn't<br>an add or update function. It then moves to the SELECT block to<br>get the user id, id, product id, name, and desired quantity, calculates the<br>subtotal by multiplying the desired quantity by the unit price, and passes these<br>values to cart.html.</div><div>For the purpose of calculating the total, we render each item<br>as a row in a table in the HTML output, add the subtotal<br>value for each row to a variable called ns.total, and then display the<br>total at the bottom.</div><br></td></tr>
<tr><td> <em>Sub-Task 3: </em> Add related pull request link(s)</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/62">https://github.com/AbhinavC12/IS601-005-31597122/pull/62</a> </td></tr>
<tr><td> <em>Sub-Task 4: </em> Add a direct link to heroku prod for this file</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://is601-ac2526-finalproj-prod.herokuapp.com/cart">https://is601-ac2526-finalproj-prod.herokuapp.com/cart</a> </td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 8: </em> User can update cart quantity </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Show a before and after screenshot of Cart Quantity update</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209060277-d93cfcdd-a8ea-4424-adb8-53f3cd49afb5.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot showing before updating the quantity of product JBL Wireless In-Ear Headphones<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209060316-b2801e71-0ba5-45b4-93e0-9eca2ea58d38.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot showing after updating the quantity of product JBL Wireless In-Ear Headphones<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Show a before and after screenshot of setting Cart Quantity to 0</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209060516-bb53b28c-4edb-4965-a790-e52b74ab8678.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Screenshot showing of cart before setting the quantity to 0 for product DEERC<br>Drone----------edited<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209060527-e0fed536-f072-41a1-a547-f596d73b50a3.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Screenshot showing of cart after setting the quantity to 0 for product DEERC<br>Drone----------edited<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 3: </em> Show how a negative quantity is handled</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209060543-d6d6a992-a105-4c43-9a7f-2b347a011c13.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>showing how a negative quantity is handled when tried to set -1 to<br>the sony zv-1f volg camera<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 4: </em> Explain the update process including how a value of 0 and negatives are handled</td></tr>
<tr><td> <em>Response:</em> <div>- When we press the update button next to the amount field and<br>update button in the cart, a concealed product id is sent to the<br>cart function.</div><div>- In the code, if the quantity is greater than 0, we<br>first retrieve the name and price from the products table before updating the<br>quantity and price in the cart table while supplying the product id and<br>user id.</div><div>- As the number is less than 0, when we enter 0<br>in the quantity field, the code moves to the DELETE block, where we<br>delete the product from the cart database while passing the product id and<br>user id.</div><div>- We set the minimum value for the input field in HTML<br>to 0 to handle negative values in the amount field.</div><br></td></tr>
<tr><td> <em>Sub-Task 5: </em> Add related pull request link(s)</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/62">https://github.com/AbhinavC12/IS601-005-31597122/pull/62</a> </td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 9: </em> Cart Item Removal </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Add a before and after screenshot of deleting a single item from the Cart</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209061160-4683005f-124f-488f-af3e-3fa97e578002.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Screenshot showing the cart before deleting the product Sony ZV-1F vlog camera from<br>the cart<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209061162-8d97fa86-ca11-4857-8602-9a816ffd8f0b.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Screenshot showing the cart after deleting the product Sony ZV-1F vlog camera from<br>the cart<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add a before and after screenshot of clearing the cart</td></tr>
<tr><td><table><tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209061262-89f40b1d-4201-4beb-abbc-d9b3e6ff23b5.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>Screenshot showing before clearing a cart completely<br></p>
</td></tr>
<tr><td><img width="768px" src="https://user-images.githubusercontent.com/113549290/209061271-da175407-6b33-4c89-977c-1ddb87752ce9.png"/></td></tr>
<tr><td> <em>Caption:</em> <p>screenshot showing after the clearing the cart completely<br></p>
</td></tr>
</table></td></tr>
<tr><td> <em>Sub-Task 3: </em> Briefly explain how each delete process works</td></tr>
<tr><td> <em>Response:</em> <div>When deleting a single item from a cart, a hidden field amount of<br>-1 will be supplied next to the delete button, and the cart function<br>will process the delete query while sending the product id if the number<br>is less than zero.</div><div>When clearing the entire cart, we pass the variable delete<br>all with a value of 1, and if the delete all value is<br>True in the cart method, we delete the records in the Cart table<br>while passing the user id.<br></div><br></td></tr>
<tr><td> <em>Sub-Task 4: </em> Add related pull request link(s)</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://github.com/AbhinavC12/IS601-005-31597122/pull/62">https://github.com/AbhinavC12/IS601-005-31597122/pull/62</a> </td></tr>
</table></td></tr>
<table><tr><td> <em>Deliverable 10: </em> Misc </td></tr><tr><td><em>Status: </em> <img width="100" height="20" src="http://via.placeholder.com/400x120/009955/fff?text=Complete"></td></tr>
<tr><td><table><tr><td> <em>Sub-Task 1: </em> Describe any issues and learnings throughout this milestone</td></tr>
<tr><td> <em>Response:</em> <p>One of the place where I got stuck was, while creating the tables,<br>the cart table is depend on product table and the query for creating<br>for cart table is before the creation of product table so there my<br>product table was created but the items were not able to get into<br>cart and later i noticed that there was no cart table created and<br>then i realize so i run inti_db.py again and the cart table was<br>created.<div>And rest was all normal and got a chance to learn to build<br>the webpages in a real-life project.</div><br></p><br></td></tr>
<tr><td> <em>Sub-Task 2: </em> Add a link to your herok prod project's login page</td></tr>
<tr><td> <a rel="noreferrer noopener" target="_blank" href="https://is601-ac2526-finalproj-prod.herokuapp.com/login">https://is601-ac2526-finalproj-prod.herokuapp.com/login</a> </td></tr>
</table></td></tr>
<table><tr><td><em>Grading Link: </em><a rel="noreferrer noopener" href="https://learn.ethereallab.app/homework/IS601-005-F22/is601-milestone-2-shop-project/grade/ac2526" target="_blank">Grading</a></td></tr></table>
