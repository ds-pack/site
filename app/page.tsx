import {
  Text,
  Link,
  Stack,
  Banner,
  Heading,
  List,
  ListItem,
  InlineCode,
  Box,
} from '@ds-pack/components'

export default function Index() {
  return (
    <Stack gap="$4" mt="$4">
      <Text>
        DS Pack is a suite of packages for building web user interfaces. It
        originated as a collection of components and utilities that I (
        <Link
          is="a"
          target="_blank"
          rel="noopener"
          href="https://matthamlin.me"
        >
          Matt Hamlin
        </Link>
        ) had found as I built a variety of side projects.
      </Text>
      <Text>
        This docs site is very much a work-in-progress that's meant to document
        each of the packages and their exports + how others can adopt them!
      </Text>
      <Banner variant="info">
        <Text>
          If you find any bugs or quirks within these docs, please{' '}
          <Link
            is="a"
            href="https://github.com/ds-pack/site/issues/new"
            target="_blank"
          >
            open an issue
          </Link>
          !
        </Text>
      </Banner>
      <Heading is="h2" variant="h2">
        Table of Contents:
      </Heading>
      <List variant="ol">
        <ListItem>
          <Link is="a" href="#packages">
            Packages
          </Link>
        </ListItem>
        <ListItem>
          <Link is="a" href="#components">
            Components
          </Link>
          <List ml="$2" variant="ol">
            <ListItem>
              <Link is="a" href="#banner">
                Banner
              </Link>
            </ListItem>
            <ListItem>
              <Link is="a" href="#blockquote">
                Blockquote
              </Link>
            </ListItem>
            <ListItem>
              <Link is="a" href="#box">
                Box
              </Link>
            </ListItem>
            <ListItem>
              <Link is="a" href="#button">
                Button
              </Link>
            </ListItem>
          </List>
        </ListItem>
      </List>
      <Heading is="h3" variant="h3" id="packages">
        Packages:
      </Heading>
      <List variant="ul">
        <ListItem mb="$1">
          <InlineCode>@ds-pack/components</InlineCode>
        </ListItem>
        <ListItem mb="$1">
          <InlineCode>@ds-pack/use-local-storage</InlineCode>
        </ListItem>
        <ListItem mb="$1">
          <InlineCode>@ds-pack/use-media</InlineCode>
        </ListItem>
        <ListItem mb="$1">
          <InlineCode>@ds-pack/use-refs</InlineCode>
        </ListItem>
        <ListItem mb="$1">
          <InlineCode>simple-props</InlineCode>
        </ListItem>
        <ListItem mb="$1">
          <InlineCode>@ds-pack/theme-to-css-vars</InlineCode>
        </ListItem>
        <ListItem mb="$1">
          <InlineCode>@ds-pack/get</InlineCode>
        </ListItem>
      </List>
      <Heading is="h3" variant="h3" id="components">
        <InlineCode>@ds-pack/components</InlineCode>:
      </Heading>
      <Text>
        The components package is by far the most extensive of the collection of
        libraries, it exposes several foundational components that can be used
        to build anything from a complex web application to a more basic
        content-focused web site.
      </Text>
      <Text>
        An example use of several of the components from the library is my
        personal website:{' '}
        <Link is="a" href="https://matthamlin.me">
          matthamlin.me
        </Link>
        .
      </Text>
      <Heading is="h4" variant="h4">
        List of Components / Hooks:
      </Heading>
      <List variant="ul">
        <ListItem>Banner</ListItem>
        <ListItem>Blockquote</ListItem>
        <ListItem>Box</ListItem>
        <ListItem>Button</ListItem>
        <ListItem>Checkbox</ListItem>
        <ListItem>Chip</ListItem>
        <ListItem>Dropdown</ListItem>
        <ListItem>Fieldset</ListItem>
        <ListItem>Figure</ListItem>
        <ListItem>GitHubMention</ListItem>
        <ListItem>Heading</ListItem>
        <ListItem>Image</ListItem>
        <ListItem>InlineCode</ListItem>
        <ListItem>Input</ListItem>
        <ListItem>Label</ListItem>
        <ListItem>Link</ListItem>
        <ListItem>List</ListItem>
        <ListItem>Portal</ListItem>
        <ListItem>RadioButton</ListItem>
        <ListItem>RadioInput</ListItem>
        <ListItem>Stack</ListItem>
        <ListItem>Tapable</ListItem>
        <ListItem>Text</ListItem>
        <ListItem>Textarea</ListItem>
        <ListItem>ToggleInput</ListItem>
        <ListItem>TwitterMention</ListItem>
        <ListItem>VisuallyHidden</ListItem>
        <ListItem>useTapable</ListItem>
      </List>
      <Heading is="h3" id="banner">
        Banner:
      </Heading>
      <Box is="pre" maxWidth="35ch" style={{ overflow: 'auto' }}>
        <code>{`import {Banner, Text} from '@ds-pack/components';

function Component() {
  return (
    <Banner variant="info">
      <Text>Some information!</Text>
    </Banner>
  )
}`}</code>
      </Box>
      <Text fontWeight="bold">Examples:</Text>
      <Banner variant="info">
        <Text>Some information!</Text>
      </Banner>
      <Banner variant="warning">
        <Text>A warning!</Text>
      </Banner>
      <Banner variant="error">
        <Text>An error!</Text>
      </Banner>
      <Banner variant="success">
        <Text>A success message!</Text>
      </Banner>
      <Heading is="h4" variant="h4">
        Props:
      </Heading>
      <Box is="dl" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <Box is="dd">
          <InlineCode>variant</InlineCode>
        </Box>
        <Box is="dt">
          <Text>The style variant of the banner, supported values:</Text>
          <List variant="base" is="ul">
            <ListItem>
              <InlineCode>'info'</InlineCode>
            </ListItem>
            <ListItem>
              <InlineCode>'warning'</InlineCode>
            </ListItem>
            <ListItem>
              <InlineCode>'error'</InlineCode>
            </ListItem>
            <ListItem>
              <InlineCode>'success'</InlineCode>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Stack>
  )
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
