const React = require("react");
const { ChakraProvider, Box, Heading, Link } = require("@chakra-ui/react");

function Default(html) {
  return (
    <ChakraProvider>
      <html lang="en">
        <head>
          <title>{html.title || "Default"}</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
            integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ=="
            crossOrigin="anonymous"
          />
          {/* <link rel="stylesheet" href="/main.css" /> */}
          <link rel="icon" type="image/png" href="/entry.png" />
        </head>
        <body>
          <Box>
            <Heading>
              <Link color="red" href="/entries">
                Blog_App
              </Link>
            </Heading>
            <Box>{html.children}</Box>
          </Box>
        </body>
      </html>
    </ChakraProvider>
  );
}

module.exports = Default;
