# One of the easiest way to do that is to :

1) Copy remote project and call it "uploadPDF"
2) in uploadPDF/package.json rename the app to "cra_uploadpdf"
3) in uploadPDF/rsbuild.config.ts switch the app's port to 3012 (or any none used port)
4) in cra/package.json, add the new folder under workspace
5) at the root of uploadPDF folder, create a .env file which will have your API keys for OVH cloud's S3 Bucket
# More info:
https://jasonwatmore.com/post/2022/06/22/react-access-environment-variables-from-dotenv-env

# always use pnpm and not yarn or npm
6) to use the S3 api in your react code, you can look at : (go directly to step 5) https://medium.com/how-to-react/how-to-upload-files-on-an-s3-bucket-in-react-js-97a3ccd519d1
or : (step 5 as well) https://www.mohammadfaisal.dev/blog/how-to-upload-files-to-aws-s3-in-react
