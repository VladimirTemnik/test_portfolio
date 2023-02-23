import { rest } from 'msw'

export const handlers = [
    // Handles a POST /login request
    rest.post('/login', (req, res, ctx) => {
        // Persist user's authentication in the session
        sessionStorage.setItem('is-authenticated', 'true')
        return res(
            // Respond with a 200 status code
            ctx.status(200),
        )
    }),
    // Handles a GET /user request
    rest.get('/user', (req, res, ctx) => {
        // Check if the user is authenticated in this session
        const isAuthenticated = sessionStorage.getItem('is-authenticated')
        /*if (!isAuthenticated) {
            // If not authenticated, respond with a 403 error
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: 'Not authorized',
                }),
            )
        }*/
        // If authenticated, return a mocked user details
        return res(
            ctx.status(200),
            ctx.json({
                avatar: "https://via.placeholder.com/150",
                firstName: "Vladimir",
                lastName: "Temnyk",
                position: "Junior Front-End Developer",
                email: "temnik.vladimir@gmail.com",
                phoneNumber: "+380677995577",
                address: "Kyiv, Ukraine ",
                birthday: "December 7th  1994",
                gender: "male",
                relationship: "single",
                socialNW: {
                    github: "https://github.com/VladimirTemnik?tab=repositories",
                    linkedIn: "https://www.linkedin.com/in/volodymyr-temnyk-714012222/"
                },
                skills: ["javaScript", "HTML", "CSS", "SASS/SCSS", "VUE.JS", "GIT"],
                languages: [
                    {
                        language: "ukrainian",
                        score: 5,
                    },
                    {
                        language: "russian",
                        score: 5,
                    },
                    {
                        language: "english",
                        score: 4,
                    },
                    {
                        language: "spanish",
                        score: 3,
                    },

                ],
                hobbies: ["billiard", "tennis", "gaming", "poker"],
                education: [
                    {
                        degree: "Master",
                        university: "Kyiv Institute of International Relations",
                        city: "Kyiv",
                        speciality: "International Finance",
                        period: "Sept. 2012 - May 2018",
                    }
                ],
                jobExperience: [
                    {
                        position: "Corporate client manager",
                        company: "JSC PrivatBank",
                        city: "Kyiv",
                        description: "Working with corporate clients, negotiating, coordinating departments, work to goal KPI`s",
                        period: "Sept. 2017 - Sept. 2021"
                    },
                    {
                        position: "Head of Sales",
                        company: "CheckEat",
                        city: "Kyiv",
                        description: "Heading sales department, building a system of sales, introducing KPI- system, negotiating",
                        period: "Sept. 2021 - Feb. 2022"
                    }
                ],
                achievements: [
                    {
                        company: "JSC PrivatBank",
                        achievement: "gratitude for being included in the list of the best employees of the profession 3 months in a row"
                    }
                ],
                profile: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad esse ex maiores nisi possimus quam reiciendis vero. Aperiam dolore facere maxime omnis porro saepe voluptatibus. Accusantium eaque explicabo ipsa magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos harum incidunt non officia placeat. Ab accusamus ad delectus fugiat in laboriosam odit possimus quos ratione repellendus repudiandae, sapiente tempora tempore!",
                courses:[
                    {
                        source: "ITVDN",
                        program: "Front-End developer 2022",
                        period: "July 2022 - Jan. 2023",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad esse ex maiores nisi possimus quam reiciendis vero. Aperiam dolore facere maxime omnis porro saepe voluptatibus."
                    },
                    {
                        source: "Udemy",
                        program: "The complete VUE.JS course. 2022 edition",
                        period: "Sept. 2022 - Dec. 2022",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad esse ex maiores nisi possimus quam reiciendis vero. Aperiam dolore facere maxime omnis porro saepe voluptatibus."
                    }
                ],
            }),
        )
    }),
]

