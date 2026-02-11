user - food reels, will view food items
food partner - list food items, matlab add karega food items ko

# Backend

- backend mai 2 API rahengi humari, ek user ki authentication vali api jisse user register krega login krega and logout krega
- dusri hum food partner or admin bhi bol sakte hai uski api create krenge vo bhi simillarly register hoga, login hoga and logout hoga.
- food partner items add krega jo user ko show honge

# STEPS -

1. create server using express
2. creating server and starting server are two different things
3. src/app.js ke andar server create hoga & server.js ke andar server start hoga
4. postman api ko develop karne ke liye and api ko test krne ke liye use krenge
5. server ko connect database se
6. database ko connect karne ke liye ek aur folder banta hai db/db.js, is file ke andar likha jayega kis tarah se database server se connect hoga i.e logic and that function will be calles inside server.js
7. user authentication routes banana chalu karenge inside routes/auth.routes.js
   - app.js file ke andr jo bhi hum create karte hai usko hum app ke through easily access kar sakte hai but route file ke andar pehle router create karna padta hai
8. controller jo api ke saath use hota hai usko bhi alag file mai likhte hai jisme api ka logic likha jaata hai
9. abb user ko create karne se pehle uska model create karna padega
10. express se jo server create hota hai vo by default req.body se data padh nhi sakta hai uske liye we use middleware
11. simillarly food partner auth api banayenge
12. cloud storage provider mai video files ko store karenge jinko hum url se access krenge bcz database mai video files store nahi karte hai it is a bad practice
13. after food partner & user auth hume food bhi add karna hai uski bhi api banani pdegi alg se, uske liye alg se model bhi banana pdega
14. jab hum file bhejte hai express ke server pe frontend se, express ka server by default file nahi padh sakta, uske liye multer name ka package use hoga
15. file stored jo hogi vo ya to ssd pe hogi ya hard disk mai hogi, but production pe jo server chal raha hota hai vahan ssd and hard disk ka access nahi hota hai so server pe files store nhi hoti cloud storage providers pe hoti hai

# community edition database - matlab local system pe database download rehta hai and background mai chalta hai

# imagekit - hum apni files ispe daalte hai aur ye badle mai hume ek url deta hai, simillarly cloudinary, awsS3 - aisie services jinko hum kabhi bhi change kar sakte hai, i.e third party services in sab ka code jata hai services folder ke andr

# dao file - server aur database ke beech mai jitne interactions hote hai vo dao file ke through hote hai

# data validation

# pexels.com
