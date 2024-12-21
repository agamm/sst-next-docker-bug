The error:

Run: `pnpx sst deploy --stage demo`
Error:
```
#18 [builder 4/4] RUN npm run build
#18 1.334 
#18 1.334 > demo@0.1.0 build
#18 1.334 > next build
#18 1.334 
#18 2.766    ▲ Next.js 15.1.2
#18 2.767 
#18 2.841    Creating an optimized production build ...
#18 18.86  ✓ Compiled successfully
#18 18.87    Linting and checking validity of types ...
#18 20.98  ⨯ ESLint: Cannot serialize key "parse" in parser: Function values are not supported.
#18 20.98    Collecting page data ...
#18 27.67    Generating static pages (0/5) ...
#18 29.46 Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
#18 29.46 Error: It does not look like SST links are active. If this is in local development and you are not starting this process through the multiplexer, wrap your command with `sst dev -- <command>`
```