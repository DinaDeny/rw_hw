module.exports ={
    default: {
        paths: [
            "src/tests/features"
        ], 
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber-report.json", 
            "html:reports/cucumber-report.html"
        ],
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await"
        },
        require: [
            'src/tests/features/support/world.ts',
            'src/tests/features/support/hooks.ts',
            "src/tests/step-definitions/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
    }
}