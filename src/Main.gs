/*==========================================================
 *
 * Badminton Data Center (BDC)
 * File        : UI.gs
 * Description : Google Apps Script Entry Point
 *
 ==========================================================*/

/**
 * Web App Entry Point
 *
 * @returns {GoogleAppsScript.HTML.HtmlOutput}
 */
function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('Badminton Data Center');
}

/**
 * Health Check
 *
 * @returns {Object}
 */
function getHealth() {
  return {
    success: true,
    application: 'Badminton Data Center',
    version: '0.1.0',
    status: 'Healthy',
    timestamp: new Date().toISOString()
  };
}
