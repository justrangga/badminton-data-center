/*==========================================================
 *
 * Badminton Data Center (BDC)
 * File        : Core.gs
 * Description : Core Framework
 *
 ==========================================================*/

/**
 * Global Namespace
 */
const BDC = Object.freeze({

  Config: {

    AppName: 'Badminton Data Center',

    Version: '0.1.0',

    Debug: true,

    TimeZone: 'Asia/Jakarta',

    SpreadsheetId: ''

  },

  Constant: {

    Provider: Object.freeze({

      BWF: 'BWF',

      PBSI: 'PBSI',

      PROXY: 'PROXY'

    })

  },

  Policy: Object.freeze({

    DIRECT_ONLY: 'DIRECT_ONLY',

    DIRECT_FIRST: 'DIRECT_FIRST',

    PROXY_FIRST: 'PROXY_FIRST',

    PROXY_ONLY: 'PROXY_ONLY'

  }),

  Endpoint: {

    BWF: {},

    PBSI: {},

    Proxy: {}

  }

});
