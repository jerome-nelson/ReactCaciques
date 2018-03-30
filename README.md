This is a project using React.

## Contains

* Webpack Dev Server running Development Build of React
* Injection of critical styles in Critical.scss
* Eslinting with `eslint-plugin-react`
* Prettier Autoformatting on commit
* Travis CI Builds
* Master Automated Deployment to AWS Instance

## Travis

`.travis.yml` contains a deploy hook to Elastic Beanstalk instance, (Travis build has private variables for details)

## Husky

* Precommit: `eslint`, `prettier`

## Recommended Reading

* https://docs.aws.amazon.com/general/latest/gr/rande.html

##

## Amazon MFA

* https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html?icmpid=docs_iam_console#id_root-user_manage_add-key
* https://itunes.apple.com/us/app/authy/id494168017?mt=8
