import { defineConfig } from '@playwright/test'
export default defineConfig({ testDir:'./tests', timeout:60000, fullyParallel:true, workers:2, reporter:'list', use:{baseURL:'http://127.0.0.1:4175',headless:true,viewport:{width:1440,height:1040},screenshot:'only-on-failure',trace:'retain-on-failure'},outputDir:'test-results' })
