I chose the car dealership for my domain and Web UI (SPA) for my interface.
The car dealership because for some reason I find listing inventory fun and the SPA because many web applications are moving this direction and I felt is was a strong move.

I decided to begin with create-react-app becase it's great for rapid prototyping. Having a starter build with tons of out of the box functionality really gets these things going faster. In a real production build I would prefer to role my own setup as there is a lot of code bloat in pre-built solutions.

create-react-app comes pre-rolled with jest for testing but I like the assertion support added by enzyme so I tossed that into the mix and then I needed to moch fetching for data retrieval so I threw in jest-fetch-moch for out of the box fetch support for my tests.

Given that this is built on create-react-app you should be able to just clone it, npm install, and npm start.