// paste this in all html files' Style
//     <link rel="stylesheet" href="./styles/main_nav.css">
//     <link rel="stylesheet" href="./styles/main_footer.css">

// 0000000000000000000000000000000000000000000000000000000
// paste this in all html files' body at the starting
//<div id="main_nav976"></div>

// paste this in all html files' body at the ending.
//<div id="footer1"></div>
// 000000000000000000000000000000000000000000000000000000000000
// paste this in all js files

// import navbar from "../components/main_nav.js"
// let navbarDiv=document.getElementById('main_nav976')
// navbarDiv.innerHTML=navbar();

// import footer from "../components/mainFooter.js"
// let main_footer=document.getElementById('footer1');
// main_footer.innerHTML=footer();

// keep type="module" in each script linking

function navbar() {
  window.onload = (event) => {
    const drop = document.querySelectorAll(".dropdown");
    console.log(drop, "drop");
    document.addEventListener("click", dropit);
    drop.forEach((ele) => {
      ele.addEventListener("click", dropit);
    });
  };

  const dropit = (e) => {
    //console.log(e.target, "---");
    const drop = document.querySelectorAll(".dropdown");
    drop.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.parentNode.classList.add("active");
  };
  let name = JSON.parse(localStorage.getItem("name")) || "Log In";

  return `<div id="main_nav976_00">
  <div id="main_nav976_01">
    <a href='index.html'><img src="./images/image_logo.JPG" alt="" /></a>
  </div>

  <div id="main_nav976_02">
    <img id="search_logo" src="./images/search icon.png" alt="" />
    <div>
      <input
        id="search_boxx"
        type="text"
        placeholder="Search for products or brands"
      />
    </div>
  </div>

  <div id="main_nav976_03">
    <div>
      <div id="main_nav976_031" onclick="signin()">Sign In ▽</div>
    
    </div>
    <div id="main_nav976_032">
      <a href='Add_to_cart.html'><img src="./images/cart logo.JPG" alt="" /></a>
    </div>
  </div>
</div>
<hr />
<!-- 0000000000000000000000000000000000000000000000000 -->
<div id="main_nav976_10">
  <div class="dropdown"><p>Clearance</p><div class="dropdown-content">
    <!-- <p>Hello World!</p> -->
    <div class="c">
      <div><h3><a href='get_inspired.html'>Clearance: Get Inspired</a></h3></div>
      <hr>
      <div><h3>Extra 60% off Clearance Shoes</h3></div>
      <div><h3>25% Off Barefoot Dreams Throws</h3></div>
      <div><h3>Best Sellers</h3></div>
      <div><h3>Exta 60% off Clearance Shoes</h3></div>
      <div><h3>New Markdowns</h3></div>
    </div>
    <div class="c">
      <div><h3>Women</h3></div>
      <p>Clothing</p>
      <p>Shoes</p>
      <p>Handbags</p>
      <p>Sunglasses & Eyewear</p>
      <p>Jewelry</p>
      <p>Watches</p>
      <p>Accessories</p>
    </div>
    <div class="c">
      <div><h3>Men</h3></div>
      <p>Clothing</p>
      <p>Shoes</p>
      <p>Watches</p>
      <p>Accessories</p>
      <div><h3>Desiner</h3></div>
    </div>
    <div class="c">
      <div><h3>Kids</h3></div>
      <p>Girl's Clothing</p>
      <p>Girl's Shoes</p>
      <p>Boy's Clothing</p>
      <p>Boys's Shoes</p>
      <p>Kids' Shoes</p>
      <p>Baby Clothing & Shoes</p>
      <div><h3>Activewear</h3></div>
    </div>
    <div class="c">
      <div><h3>Home</h3></div>
      <p>Art & Wall Decor</p>
      <p>Bath</p>
      <p>Bedding</p>
      <p>Decor</p>
      <p>Electronic & Tech Accessories</p>
      <p>Kitchen & Tabletop</p>
      <p>Storage & Cleaning</p>
      <div><h3>Beauty</h3></div>
    </div>
    <div class="c"><img src="./images/navbar_ad.JPG" alt=""></div>
  </div>
</div>
<!-- 00000000000000000000000000000000000000000000000000000000 -->
  <div class="dropdown"><p>Women</p>
    <div class="dropdown-content">
      <!-- <p>Hello World!</p> -->
      <div class="c">
        <div><h3>Women: Get Inspired</h3></div>
        <hr>
        <div><h3>Extra 60% off Clearance Shoes</h3></div>
        <div><h3>Flash Events</h3></div>
        <div><h3><a href='New_Arrival.html'>New Arrivals</a></h3></div>
        <div><h3><a href='best_seller.html'>Best Sellers</a></h3></div>
        <div><h3>Contemporary brands</h3></div>
        <div><h3>Trend brands</h3></div>
        <div><h3>Dresses Under $50</h3></div>
        <div><h3>Denim Under $50</h3></div>
        <div><h3>Sandals Under $50</h3></div>
        <div><h3>Boots Under $50</h3></div>
        <div><h3>Dresses Under $50</h3></div>
        <div><h3>Sneakers Under $50</h3></div>
        <div><h3>Sweaters Under $50</h3></div>
        <div><h3>Coats Under $50</h3></div>

      </div>
      <div class="c">
        <div><h3>Clothing</h3></div>
        <p>Activewear</p>
        <p>Blazers</p>
        <p>Coats & Jackets</p>
        <p>Dresses</p>
        <p>Jeans & Denim</p>
        <p>Jumpsuits & Rompers</p>
        <p>Lingerie, Hosiery & Shapewear</p>
        <p>Loungewear</p>
        <p>Pants & Leggings</p>
        <p>Shorts</p>
        <p>Skirts</p>
        <p>Sleepwear & Robes</p>
        <p>Sweaters</p>
        <p>Sweatshirts & Hoodies</p>
        <p>Swimsuits & Cover-Ups</p>
        <p>Tops</p>
      </div>
      <div class="c">
        <div><h3>Shoes</h3></div>
        <p>Athletic & Running</p>
        <p>Boot& Booties</p>
        <p>Clogs</p>
        <p>Comfort</p>
        <p>Flats</p>
        <p>Flip-Flops & Slides</p>
        <p>Heels</p>
        <p>Loafers & Oxfords</p>
        <p>Mules</p>
        <p>Rain Boots</p>
        <p>Sandals</p>
        <p>Slippers</p>
        <p>Sneakers</p>
        <p>Winter & Snow Boots</p>
        <p>Wedges</p>
        <p>Extended Shoe Sizes & Widths</p>
      </div>
      <div class="c">
        <div><h3>Young Adult</h3></div>
       <p>Accessories</p>
       <p>Clothing</p>
       <p>Shoes</p>
        <div><h3>Desiner</h3></div>
        <p>Desiner Accessories</p>
        <p>Desiner Bags</p>
        <p>Desiner Clothing</p>
        <p>Desiner Shoes</p>
        <p>Desiner Sunglasses & Eyewear</p>
        <div><h3>Handbags</h3></div>
        <div><h3>Sunglasses & Eyewear</h3></div>
        <div><h3>Jewelry & Watches</h3></div>
        <div><h3>Accessories</h3></div>
        <div><h3>Beauty</h3></div>
      </div>
      <div class="c">
        <div><h3>Shop by Occasion</h3></div>
        <p>Casual Weekend</p>
        <p>Homecoming</p>
        <p>Lounge & Cozy Styles</p>
        <p>Night Out</p>
        <p>Vacation</p>
        <p>Wear to Work </p>
        <p>Wedding Guest</p>
        <div><h3>Shop By Trend</h3></div>
        <p>Lug Sole Shoes</p>
        <p>Luxe Bohemian</p>
        <p>Platform Polished</p>
        <p>Polished Preppy</p>
      </div>
      <div class="c"><img src="./images/navbar_ad.JPG" alt=""></div>
    </div>
  </div>
  <!-- 00000000000000000000000000000000000000000000 -->
  <div class="dropdown"><p>Men</p>
    <div class="dropdown-content">
      <!-- <p>Hello World!</p> -->
      <div class="c">
        <div><h3>Men: Get Inspired</h3></div>
        <hr>
        <div><h3>Extra 60% off Clearance Shoes</h3></div>
        <div><h3>Flash Events</h3></div>
        <div><h3>New Arrivals</h3></div>
        <div><h3>Best Sellers</h3></div>
        <div><h3>Contemporary brands</h3></div>
        <div><h3>Graphic Tees Under $25</h3></div>
        <div><h3>Sweaters Under $50</h3></div>
        <div><h3>Coats Under $50</h3></div>
        <div><h3>Denim Under $50</h3></div>
        <div><h3>Sneakers Under $50</h3></div>
        <div><h3>Wedding Shop</h3></div>
        <div><h3>Nike for the Family</h3></div>
        <div><h3>Rack Essentials</h3></div>
      </div>
      <div class="c">
        <div><h3>Clothing</h3></div>
        <p>Activewear</p>
        <p>Blazers & Sport Coats</p>
        <p>Coats & Jackets</p>
        <p>Dress Shirts</p>
        <p>Jeans</p>
        <p>Joggers & Sweatpants</p>
        <p>Lounge, Pajamas & Robes</p>
        <p>Pants</p>
        <p>Polo Shirts</p>
        <p>Shirts</p>
        <p>Shorts</p>
        <p>Socks</p>
        <p>Suits & Separates</p>
       <p>Sweaters</p>
       <p>Sweaters</p>
       <p>Sweatshirts & Hoodies</p>
       <p>Swimwear & Board Shorts</p>
      </div>
      <div class="c">
        <div><h3>Shoes</h3></div>
        <p>Athletic & Running</p>
        <p>Boots</p>
        <p>Comfort</p>
        <p>Dress Shoes</p>
        <p>Loafers & SlipOns</p>
        <p>Oxfords & Derbys</p>
        <p>Rain & Snow Boots</p>
        <p>Sandals & Flip-Flops</p>
        <p>Slippers</p>
        <p>Sneakers</p>
        <p>Extended Shoe Sizes & Widths</p>
      </div>
      <div class="c">
        <div><h3>Young Adult</h3></div>
       <p>Accessories</p>
       <p>Clothing</p>
       <p>Shoes</p>
        <div><h3>Desiner</h3></div>
        <p>Desiner Accessories</p>
        <p>Desiner Bags</p>
        <p>Desiner Clothing</p>
        <p>Desiner Shoes</p>
        <p>Desiner Sunglasses & Eyewear</p>
        <div><h3>Sunglasses & Eyewear</h3></div>
        <div><h3>Watches</h3></div>
        <div><h3>Accessories</h3></div>
        <div><h3>Grooming & Colonge</h3></div>
      </div>
      <div class="c">
        <div><h3>Shop by Occasion</h3></div>
        <p>Casual Weekend</p>
        <p>Get Outdoors</p>
        <p>Homecoming</p>
        <p>Lounge & Cozy Styles</p>
        <p>Vacation</p>
        <p>Wear to Work </p>
        <p>Wedding Guest</p>
      </div>
      <div class="c"><img src="./images/navbar_ad.JPG" alt=""></div>
    </div>
  </div>
  <!-- 0000000000000000000000000000000000000000000000000000 -->
  <div class="dropdown"><p>Kids</p>
    <div class="dropdown-content">
      <!-- <p>Hello World!</p> -->
      <div class="c">
        <div><h3>Kids: Get Inspired</h3></div>
        <hr>
        <div><h3>Extra 60% off Clearance Shoes</h3></div>
        <div><h3>Flash Events</h3></div>
        <div><h3>New Arrivals</h3></div>
        <div><h3>Best Sellers</h3></div>
        <div><h3>Boots Under $50</h3></div>
        <div><h3>Sneakers Under $50</h3></div>
        <div><h3>Coats & Jackets</h3></div>
        <div><h3>Pajamas & Slippers</h3></div>
        <div><h3>Disney Shop</h3></div>
        <div><h3>Baby Shower Gifts</h3></div>
        <div><h3>Shop By Occasion</h3></div>
        <div><h3>Rack Essentials</h3></div>
        <div><h3>Shop By Brand</h3></div>
        <div><h3>Nordstorm Made</h3></div>
        <div><h3>Clearance</h3></div>
      </div>
      <div class="c">
        <div><h3>Girl's Clothing</h3></div>
        <p>Baby Girl (Sizes 0-24M)</p>
        <p>Toddler Girls (Sizes 2T-4T)</p>
        <p>Girls (Sizes 4-6x)</p>
        <p>Girls (Sizes 7-16)</p>
        <p>Tween Boys</p>
        <p>Accessories</p>
        <p>Activewear</p>
        <p>Coats & Jackets</p>
        <p>Dresses & Rompers</p>
        <p>Jeans</p>
        <p>Pajamas & Robes</p>
        <p>Pants & Leggings</p>
        <p>Shorts</p>
        <p>Skirts</p>
        <p>Sweatshirts & Hoodies</p>
        <p>Swimsuits & Cover-Ups</p>
        <p>Tops</p>
        <p>Underwear, Socks & Bras</p>
      </div>
      <div class="c">
        <div><h3>Boys's Clothing</h3></div>
        <p>Baby Boy(Sizes 0-24M)</p>
        <p>Toddler Boys (Sizes 2T-4T)</p>
        <p>Boys (Sizes 4-7)</p>
        <p>Boys (Sizes 7-16)</p>
        <p>Accessories</p>
        <p>Activewear</p>
        <p>Coats & Jackets</p>
        <p>Jeans</p>
        <p>Pajamas & Robes</p>
        <p>Pants</p>
        <p>Sets</p>
        <p>Shirts & Tops</p>
        <p>Shorts</p>
        <p>Sweaters & Hoodies</p>
        <p>Swim Trunks & Rashguard</p>
        <p>T-Shirts</p>
        <p>Underwear & Socks</p>
      </div>
      <div class="c">
        <div><h3>Kids Shoes</h3></div>
        <p>Baby(Sizes 0-4)</p>
        <p>Toddler(Sizes 4.5-12)</p>
        <p>Little Kid(Sizes 12.5-3)</p>
        <p>Big Kid(Sizes 3.5-7)</p>
        <div><h3>Girls' Shoes</h3></div>
        <p>Baby(Sizes 0-4)</p>
        <p>Toddler(Sizes 4.5-12)</p>
        <p>Little Kid(Sizes 12.5-3)</p>
        <p>Big Kid(Sizes 3.5-7)</p>
        <div><h3>Boys' Shoes</h3></div>
        <p>Baby(Sizes 0-4)</p>
        <p>Toddler(Sizes 4.5-12)</p>
        <p>Little Kid(Sizes 12.5-3)</p>
        <p>Big Kid(Sizes 3.5-7)</p>
      </div>
      <div class="c">
        <div><h3>Baby & Clothing & Shoes</h3></div>
        <p>Baby Girl</p>
        <p>Baby Boy</p>
        <p>Baby Shoes</p>
        <p>Baby Gear & Essentials</p>
        <p>Baby Shower Gifts</p>
        <div><h3>Toys</h3></div>
        <p>Arts & Crafts</p>
        <p>Building Sets & Blocks</p>
        <p>Dolls & Action Figures</p>
        <p>Educational & STEM</p>
        <p>Electronic & Tech</p>
        <p>Games & Puzzle</p>
        <p>Pretend Play</p>
        <p>Stuffed Animals</p>
        <p>Vehicles & Remote Control</p>
      </div>
      <div class="c"><img src="./images/navbar_ad.JPG" alt=""></div>
    </div>
  </div>
  <!-- 0000000000000000000000000000000000000000000000000000 -->
  <div class="dropdown"><p>Shoes</p>
    <div class="dropdown-content">
      <!-- <p>Hello World!</p> -->
      <div class="c">
        <div><h3>Shoes: Get Inspired</h3></div>
        <hr>
        <div><h3>Extra 60% off Clearance Shoes</h3></div>
        <div><h3>New Arrivals</h3></div>
        <div><h3>Best Sellers</h3></div>
        <div><h3>Desiner Brands</h3></div>
        <div><h3>Contemporary Brands</h3></div>
        <div><h3>Young Adult Brands</h3></div>
        <div><h3>Boots Under $100</h3></div>
        <div><h3>Sneakers Under $50</h3></div>
        <div><h3>Special Occasion</h3></div>
        <div><h3>Nordstorm Made</h3></div>
      </div>
      <div class="c">
        <div><h3>Women's Shoes</h3></div>
        
      <p>Athletic & Running</p>
      <p>Boots & Booties</p>
      <p>Clogs</p>
      <p>Comfort</p>
      <p>Flats</p>
      <p>Flip-Flops & Sides</p>
      <p>Heels</p>
      <p>Loafers & Oxfords</p>
      <p>Mules</p>
      <p>Rain Boots</p>
      <p>Sandals</p>
      <p>Slippers</p>
      <p>Sneakers</p>
      <p>Winter & Snow Boots</p>
      <p>Wedges</p>
      <p>Extended Sizes & Widths</p>
      </div>
      <div class="c">
        <div><h3>Men's Shoes</h3></div>
        <p>Athletic & Running</p>
        <p>Boots</p>
        <p>Comfort</p>
        <p>Dress Shoes</p>
        <p>Loafers & Slip-Ons</p>
        <p>Oxfords & Derbys</p>
        <p>Rain & Snow Boots</p>
        <p>Sandals & Flip-Flops</p>
        <p>Slippers</p>
        <p>Sneakers</p>
       <p>Extended Sides & Widths</p>
      </div>
      <div class="c">
        <div><h3>Kids' Shoes</h3></div>
        <a href='kids_snakers.html'>Kids Sneakers</a>

        <p>Toddler(Sizes 4.5-12)</p>
        <p>Little Kid(Sizes 12.5-3)</p>
        <p>Big Kid(Sizes 3.5-7)</p>
        <div><h3>Girls' Shoes</h3></div>
        <p>Baby(Sizes 0-4)</p>
        <p>Toddler(Sizes 4.5-12)</p>
        <p>Little Kid(Sizes 12.5-3)</p>
        <p>Big Kid(Sizes 3.5-7)</p>
        <div><h3>Boys' Shoes</h3></div>
        <p>Baby(Sizes 0-4)</p>
        <p>Toddler(Sizes 4.5-12)</p>
        <p>Little Kid(Sizes 12.5-3)</p>
        <p>Big Kid(Sizes 3.5-7)</p>
      </div>
      <div class="c">
        <div><h3>Shop By Brand</h3></div>
        <p>Adidas</p>
        <p>ASICS</p>
        <p>Cole Haan</p>
        <p>Dr.Martens</p>
        <p>Marc Fisher LTD</p>
        <p>New Balance</p>
        <p>Nike</p>
        <p>Sam Edelman</p>
        <p>Sam Madden</p>
        <p>Stuart Weizman</p>
        <p>UGG</p>
        <div><h3>Shop By Trend</h3></div>
        <p>Chunky Sneakers</p>
        <p>Lug Sole</p>
        <p>Platform</p>
        <p>Western & Cowboy</p>
      </div>
      <div class="c"><img src="./images/navbar_ad.JPG" alt=""></div>
    </div>
  </div>
  <!-- 000000000000000000000000000000000000000000000000000 -->
  <div class="dropdown"><p>Activewear</p>
    <div class="dropdown-content">
      <!-- <p>Hello World!</p> -->
      <div class="c">
        <div><h3>Activewear: Get Inspired</h3></div>
        <hr>
        <div><h3>New Arrivals</h3></div>
        <div><h3>Best Sellers</h3></div>
        <div><h3>Leggings Under $25</h3></div>
        <div><h3>Outerwear Under $100</h3></div>
        <div><h3>Sneakers Under $500</h3></div>
        <div><h3>Athletic Gear & Equipment</h3></div>
        <div><h3>Clearance</h3></div>
      </div>
      <div class="c">
        <div><h3>Women's Activewear</h3></div>
     <p>Crops & Capris</p>
     <p>Dresses & Skirts</p>
     <p>Jackets</p>
     <p>Leggings</p>
     <p>Shirts & Tees</p>
     <p>Shorts</p>
     <p>Socks</p>
     <p>Sports Bra</p>
     <p>Sweatpants & Joggers</p>
     <p>Sweatshirts & Hoodies</p>
     <p>Tanks</p>
     <p>Workout Sets</p>
     <p>Plus Activewear</p>
      </div>
      <div class="c">
        <div><h3>Men's Activewear</h3></div>
       <p>Jackets</p>
       <p>Shirts</p>
       <p>Shorts</p>
       <p>Socks</p>
       <p>Sweatpants & Joggers</p>
       <p>Sweatshirts & Hoodies</p>
       <div><h3>Kids' Activewear</h3></div>
       <p>Girls' Activewear</p>
       <p> Boys' Activewear</p>
       <div><h3>Kids' Active Shoes</h3></div>
       <p>Girls' Active Shoes</p>
       <p>Boys' Active Shoes</p>

      </div>
      <div class="c">
        <div><h3>Women's Active Shoes</h3></div>
        <p>Hiking & Trail</p>
        <p>Lifestyle</p>
        <p>Running</p>
        <p>Sports Sandals</p>
        <p>Training</p>
        <p>Walking</p>
        <div><h3>Men's Active Shoes</h3></div>
        <p>Hiking & Trail</p>
        <p>Lifestyle</p>
        <p>Running</p>
        <p>Sports Sandals</p>
        <p>Training</p>
        <p>Walking</p>
      </div>
      <div class="c">
        <div><h3>Shop By Brand</h3></div>
        <p>Adidas</p>
        <p>Nike</p>
        <p>Z by Zella</p>
        <p>90 Degree by Reflex</p>
        <p>Sweaty Betty</p>
        <p>PUMA</p>
        <div><h3>Shop By Activity</h3></div>
        <p>Athleisure</p>
        <p>Golf</p>
       <p>Hiking</p>
       <p>Running</p>
       <p>Swim & Surf</p>
       <p>Training</p>
       <p>Yoga & Barre Winter Sport</p>
      
      </div>
      <div class="c"><img src="./images/navbar_ad.JPG" alt=""></div>
    </div>
  </div>
<!-- 000000000000000000000000000000000000000000000000000 -->
    <div class="dropdown"><p>Bags & Accessories</p>
    <div class="dropdown-content">
      <!-- <p>Hello World!</p> -->
      <div class="c">
        <div><h3>Bags & Accessories: Get Inspired</h3></div>
        <hr>
        <div><h3>New Arrivals</h3></div>
        <div><h3>Best Sellers</h3></div>
        <div><h3>Handbags Under $100</h3></div>
        <div><h3>Designer Sunglasses Under $200</h3></div>
        <div><h3>Watches Under $200</h3></div>
        <div><h3>Cold Weather Accessories</h3></div>
        <div><h3>Boxed Jewelry</h3></div>
        <div><h3>Nordstorm Made</h3></div>
        <div><h3>Women's Accessories Clearance</h3></div>
        <div><h3>Men's Accessories Clearance</h3></div>

      </div>
      <div class="c">
        <div><h3>Handbags</h3></div>
        <p>Backpacks</p>
        <p>Beach & Straw Bags</p>
        <p>Bucket bags</p>
        <p>Clutches & Pouches</p>
        <p>Crossbody Bags</p>
        <p>Fanny Packs & Belt Bags</p>
        <p>Mini Bags</p>
        <p>Satchels</p>
        <p>Shoulder Bags</p>
        <p>Totes</p>
        <p>Wallets</p>
        <div><h3>Desiner</h3></div>
        <p>Desiner Accessories</p>
        <p>Desiner Handbags</p>
        <p>Desiner Sunglasses & Eyewear</p>
 
      </div>
      <div class="c">
        <div><h3>Women's Accessories</h3></div>
        <p>Belts</p>
        <p>Hair Accessories</p>
        <p>Hats</p>
        <p>Ponchos, Kimonos & Copes</p>
        <p>Sarongs, Caftans & Cover-Ups</p>
        <p>Scarves</p>
        <div><h3>Men's Accessories</h3></div>
        <p>Bags & Backpacks</p>
        <p>Belts & Suspenders</p>
        <p>Hats</p>
        <p>Jewelry & Cufflinks</p>
        <p>Ties & Pocket Squares</p>
        <p>Wallets & Card Cases</p>
      </div>
      <div class="c">
        <div><h3>Jewelry</h3></div>
        <p>Bracelets</p>
        <p>Earrings</p>
        <p>Necklaces</p>
        <p>Rings</p>
        <p>14K Gold Jewelry</p>
        <p>Diamond Jewelry</p>
        <p>Gold Jewelry</p>
        <p>Rose Gold Jewelry</p>
        <p>Sterling Silver  Jewelry</p>

        <div><h3>Fine Jewelry</h3></div>
        <p>Bracelets</p>
        <p>Earrings</p>
        <p>Necklaces</p>
        <p>Rings</p>
      </div>
      <div class="c">
        <div><h3>Shop By Brand</h3></div>
        <p>Bony Level</p>
        <p>Gucci Sunglasses</p>
        <p>Kate Spade New York</p>
        <p>Marc Jacobs</p>
        <p>Ray-Ban</p>
        <p>Michele</p>
        <div><h3>Sunglasses & Eyewear</h3></div>
        <div><h3>Watches</h3></div>
        <div><h3>Luggage & Travel</h3></div>
        <div><h3>Tech Accessories</h3></div>
     
      
      </div>
      <div class="c"><img src="./images/navbar_ad.JPG" alt=""></div>
    </div>
  </div>
   <!-- 0000000000000000000000000000000000000000000000000000000000 -->
   <div class="dropdown"><p>Home</p>
    <div class="dropdown-content">
      <!-- <p>Hello World!</p> -->
      <div class="c">
        <div><h3>Home: Get Inspired</h3></div>
        <hr>
        <div><h3>25% Off Barefoot Dreams Throws</h3></div>
        <div><h3>Flash Events</h3></div>
        <div><h3>New Arrivals</h3></div>
        <div><h3>Best Sellers</h3></div>
        <div><h3>Bedding Under $50</h3></div>
        <div><h3>Home Decor Under $100</h3></div>
        <div><h3>Housewarming Gifts</h3></div>
        <div><h3>Rack Essentials</h3></div>
        <div><h3>Shop By Brand</h3></div>
        <div><h3>Nordstorm Made</h3></div>
        <div><h3>Clearance</h3></div>

      </div>
      <div class="c">
        <div><h3>Bath</h3></div>
        <p>Comforters & Duvet Inserts</p>
        <p>Duvet Covers</p>
        <p>Mattress Pads & Toppers</p>
        <p>Pillow Cases</p>
        <p>Pillows</p>
        <p>Quilts & Blankets</p>
        <p>Sheet Sets</p>
        <p>Throws</p>
      </div>
      <div class="c">
        <div><h3>Decor</h3></div>
        <p>Decorative Accessories</p>
        <p>Decorative Pillows</p>
        <p>Faux Plants & Stands</p>
        <p>Home Fragrances, Diffusers & Candles</p>
        <p>Lighting & Lamps</p>
        <p>Rugs & Doormats</p>
        <div><h3>Holiday Decorations</h3></div>
        <p>Christmas</p>
        <p>Halloween</p>
        <p>Thanksgiving</p>
        <div><h3>Art & Wall Decor</h3></div>
        <p>Art by Color</p>
        <p>Art by Subject</p>
        <p>Art by Type</p>
      </div>
      <div class="c">
        <div><h3>Kitchen & Tabletop</h3></div>
        <p>Bar Accessories</p>
        <p>Cookware & Bakeware</p>
        <p>Cutlery & Kitchen Knives</p>
        <p>Dinnerware & Flatware</p>
        <p>Drinkware & Glassware</p>
        <p>Serveware</p>
        <p>Small Appliances</p>

        <div><h3>Outdoor Living</h3></div>
        <p>Beach & Pool Accessories</p>
        <p>Outdoor Dining</p>
        <div><h3>Electronic & Tech Accessories</h3></div>
        <p>Headphones & Speakers</p>
      </div>
      <div class="c">
        <div><h3>Storage & Cleaning</h3></div>
        <p>Bathroom Storage</p>
        <p>Bedroom & Closet Storage</p>
        <p>Kitchen Storage</p>
        <p>Laundry & Cleaning</p>
        <p>Storage Baskets & Bins</p>
        <p>Vacuum & Floor Care</p>
     <div><h3>Pet Accessories</h3></div>
     <div><h3>Games</h3></div>
     <div><h3>Luggage & Travel</h3></div>
     <div><h3>Water Bottles & Tumblers</h3></div>
      </div>
      <div class="c"><img src="./images/navbar_ad.JPG" alt=""></div>
    </div>
  </div>
   <!-- 0000000000000000000000000000000000000000000000000000000000 -->
   <div class="dropdown"><p>Beauty</p>
    <div class="dropdown-content">
      <!-- <p>Hello World!</p> -->
      <div class="c">
        <div><h3>Beauty: Get Inspired</h3></div>
        <hr>
        <div><h3>Flash Events</h3></div>
        <div><h3>New Arrivals</h3></div>
        <div><h3>Best Sellers</h3></div>
        <div><h3>Prestige Beauty</h3></div>
        <div><h3>Beauty Under $25</h3></div>
        <div><h3>Hair Care Under $25</h3></div>
        <div><h3>Skin Care Under $20</h3></div>
        <div><h3>Makeup Under $20</h3></div>
        <div><h3>Beauty Gifts & Sets</h3></div>
        <div><h3>Travel & Mini Sizes</h3></div>
        <div><h3>Clearance</h3></div>
      </div>
      <div class="c">
        <div><h3>Hair Care</h3></div>
        <p>Hair & Scalp Treatments</p>
        <p>Hair Dryers & Styling Tools</p>
        <p>Hair Styling Products</p>
        <p>Shampoo & Conditioner</p>
        <div><h3>Fragrance</h3></div>
        <p>Candles & Diffusers</p>
        <p>Designer Fragrance</p>
        <p>Gifts & Sets</p>
        <p>Perfume</p>
        <div><h3>Tools, Brushes & Makeup Bags</h3></div>
        <p>Bath & Body Tools</p>
        <p>Hair Styling Tools</p>
        <p>Makeup Brushes, Tools, & Bags</p>
      </div>
      <div class="c">
        <div><h3>Makeup</h3></div>
         <p>Blush, Bronzer & Highlighter</p>
         <p>Brushes & Tools</p>
         <p>Concealer & Foundation</p>
         <p>Eye Makeup</p>
         <p>Eyebrows</p>
         <p>Eyeshadow & Eyeliner</p>
         <p>Gifts & Sets</p>
         <p>Lipstick, Lip Gloss & Liner</p>
         <p>Mascara & Lashes</p>
         <p>Nail Polish & Care</p>
         <p>Palettes</p>
         <p>Powder & Setting Sprays</p>
         <p>Primer</p>
      </div>
      <div class="c">
        <div><h3>Skin Care</h3></div>
         <p>Cleansers</p>
         <p>Exfoliators</p>
         <p>Eye Creams & Treatments</p>
         <p>Face Mists & Toners</p>
         <p>Face Moisturizers</p>
         <p>Facial Masks</p>
         <p>Gifts & Sets</p>
         <p>Lip Balms & Treatments</p>
         <p>Makeup Remover</p>
         <p>Serums</p>
         <p>Sunscreen</p>
         <p>Tools & Devices</p>
        <div><h3>Bath & Body</h3></div>
      </div>
      <div class="c">
        <div><h3>Shop By Brand</h3></div>
         <p>Charlotte Tilbury</p>
         <p>Clinique</p>
         <p>Drybar</p>
         <p>L'Occitane</p>
         <p>M.A.C. Cosmetics</p>
         <p>Mario Badescu</p>
         <p>Nudestix</p>
         <p>Shiseido</p>
         <p>Too Faced</p> 
         <p>Urban Decay</p>
      </div>
      <div class="c"><img src="./images/navbar_ad.JPG" alt=""></div>
    </div>
  </div>
   <!-- 0000000000000000000000000000000000000000000000000000000000 -->
   <div class="dropdown"><p>Gifts</p>
    <div class="dropdown-content">
      <!-- <p>Hello World!</p> -->
      <div class="c">
      </div>
      <div class="c">
        <div><h3>Gifts: Get Inspired</h3></div>
        <hr>
        <div><h3><a href='giftCard.html'>Gift Cards</a></h3></div>
        <div><h3>Wish List</h3></div>
        <div><h3>Best Gift Ideas</h3></div>
        <div><h3>Unique Gift Ideas</h3></div>
        <div><h3>Designer & Luxury Gifts</h3></div>
        <div><h3>Self-Care & Wellness Gifts</h3></div>
        <div><h3>Jewelry & Watches Gifts</h3></div>
        <div><h3>Beauty Gifts & Sets</h3></div>
        <div><h3>Toy Shop</h3></div>
        </div>
      <div class="c">
        <div><h3>Everyday Gifting</h3></div>
        <p>Gifts for Her</p>
        <p>Gifts for Him</p>
        <p>Gifts for Kids</p>
        <p>Gifts for Home</p>
        <p>Gifts Under $25</p>
        <p>Gifts Under $50</p>
        <p>Gifts Under $100</p>
      </div>
      <div class="c">
        <div><h3>gifts by Occasion</h3></div>
       <p>Baby Shower Gifts</p>
       <p>Bridesmaid Gifts</p>
       <p>Housewarming Gifts</p>
       <p>Wedding Gifts</p>
      </div>
      <div class="c2"><img src="./images/nav_gifts.JPG" alt=""></div>
      <!-- <div class="c"><img src="./images/navbar_ad.JPG" alt=""></div> -->

    </div>
  </div>
   <!-- 0000000000000000000000000000000000000000000000000000000000 -->
   <div class="dropdown"><p>Flash Events</p>
    <div class="dropdown-content">
      <!-- <p>Hello World!</p> -->
      <div class="c">
      </div>
      <div class="c">
        <div><h3>Flash Events: Get Inspired</h3></div>
        <hr>
        <div><h3><a href='women.html'>Women's Flash Events</a></h3></div>
        <div><h3><a href='men.html'>Men's Flash Events</a></h3></div>
        <div><h3><a href='kids.html'>Kid's Flash Events</a></h3></div>
        <div><h3>Home Flash Events</h3></div>
        <div><h3>Beauty Flash Events</h3></div>
      </div>
      <div class="c">
        <p>360 Cashmere & More Up to 60% Off</p>
        <p>Bags We Love Feat. Marc Jacobs</p>
        <p>UGG for Women</p>
        <p>UGG for Men</p>
        <p>Designer Fragnances for All Up to 50% Off</p>
        <p>Beauty Tools Up to 25% Off Feat. Dyson & NuFACE</p>
        <p>Extra 25% Off Selected MAC Cosmetics</p>

      </div>
      <div class="c2">
         <img src="./images/nav_gifts.JPG" alt="">
      </div>
      <div class="c">
       
      </div>
      <div class="c"></div>
    </div>
  </div>`;
}

export default navbar;
