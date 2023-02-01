import React, { useState } from 'react'
import { Button, Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1)
        },
    },
    paperRoot: {
        backgroundColor: '#FFDBAC',
        justifyContent: "space-between",
        border: "1px solid"
    }
}))
export default function About() {
    const [showContent, setShowContent] = useState(false)
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" onClick={() => setShowContent(!showContent)}>
                Save
            </Button>
            {
                showContent && (
                    <>
                        <Grid container spacing={0.5}>
                            The purpose of Next.js:
                            <Paper
                                className={classes.paperRoot}
                            >
                                Next.js is a JavaScript framework for building server-rendered React applications. The purpose of Next.js is to simplify the development of scalable and high-performance React applications.
                                Some of the key benefits of using Next.js include:
                                <hr />
                                1)Server-side rendering: Next.js provides automatic server-side rendering out-of-the-box, which can improve the initial loading performance and SEO of your application.
                                <br />
                                <hr />
                                2)Routing: Next.js provides a simple and flexible routing system, allowing you to map URLs to pages in your application.
                                <br />
                                <hr />
                                3)Static export: Next.js provides an easy way to export your application as a static site, allowing you to host it on a CDN or other static hosting service.
                                <br />
                                <hr />
                                4)Modular architecture: Next.js encourages a modular architecture, making it easy to split your application into reusable components and manage the dependencies between them.
                                <br />
                                <hr />
                                5)Built-in optimizations: Next.js includes built-in optimizations, such as code splitting and asset optimization, which can improve the overall performance and size of your application.
                                Overall, the purpose of Next.js is to provide a framework for building fast and scalable React applications that are easy to develop and maintain. Whether you're building a simple single-page app or a complex enterprise application, Next.js can help you achieve your goals.
                            </Paper>
                        </Grid>
                        <br />
                        <Grid container spacing={0.5}>
                            When was first the nextjs released?
                            <Paper
                                className={classes.paperRoot}
                            >
                                <hr />
                                1)Next. js was first released as an open-source project on GitHub on October 25, 2016.
                                <br />
                                <hr />
                            </Paper>
                        </Grid>
                        <br/>
                        <Grid container spacing={0.5}>
                            
                            <Paper
                                className={classes.paperRoot}
                            >
                                <hr />
                                Next.js has two forms of pre-rendering: 
                                Static Generation and Server-side Rendering. 
                                <br/>
                                The difference is in when it generates the HTML for a page. 
                                <br/>
                                Static Generation (Recommended): The HTML is generated at build time and will be reused on each request. Server-side Rendering: The HTML is generated on each request.
                                <br />
                                <hr />
                            </Paper>
                        </Grid>
                    </>
                )
            }
        </div>
    )
}
