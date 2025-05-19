/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Start (unlock) scooter
     * Sends R0 + L0 command to unlock scooter.
     * @param requestBody
     * @returns any Scooter unlocked
     * @throws ApiError
     */
    public static postApiScooterStart(
        requestBody: {
            imei: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/start',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Stop (lock) scooter
     * Sends R0 + L1 command to lock scooter.
     * @param requestBody
     * @returns any Scooter locked
     * @throws ApiError
     */
    public static postApiScooterStop(
        requestBody: {
            imei: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/stop',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get one-time GPS location (D0)
     * @param requestBody
     * @returns any One-time location data
     * @throws ApiError
     */
    public static postApiScooterGps(
        requestBody: {
            imei?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/gps',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Start GPS tracking (D1)
     * @param requestBody
     * @returns any GPS tracking started
     * @throws ApiError
     */
    public static postApiScooterGpsTrack(
        requestBody: {
            imei?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/gps-track',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Stop GPS tracking
     * @param requestBody
     * @returns any GPS tracking stopped
     * @throws ApiError
     */
    public static postApiScooterStopTrack(
        requestBody: {
            imei?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/stop-track',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Apply IOT device settings (S5)
     * @param requestBody
     * @returns any IOT settings applied
     * @throws ApiError
     */
    public static postApiScooterIotSettings(
        requestBody: {
            imei: string;
            data: Array<string>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/iot-settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get scooter info (S6)
     * @param requestBody
     * @returns any Scooter info returned
     * @throws ApiError
     */
    public static postApiScooterInfo(
        requestBody: {
            imei?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Apply setting instruction 1 (S7)
     * @param requestBody
     * @returns any Setting 1 applied
     * @throws ApiError
     */
    public static postApiScooterSetting1(
        requestBody: {
            imei: string;
            data: Array<string>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/setting1',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Apply setting instruction 2 (S4)
     * @param requestBody
     * @returns any Setting 2 applied
     * @throws ApiError
     */
    public static postApiScooterSetting2(
        requestBody: {
            imei: string;
            data: Array<string>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/setting2',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Trigger alarm (W0)
     * @param requestBody
     * @returns any Alarm command sent
     * @throws ApiError
     */
    public static postApiScooterAlarm(
        requestBody: {
            imei?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/alarm',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Play beep (V0)
     * @param requestBody
     * @returns any Beep command sent
     * @throws ApiError
     */
    public static postApiScooterBeep(
        requestBody: {
            imei?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/beep',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get firmware version (G0)
     * @param requestBody
     * @returns any Firmware info received
     * @throws ApiError
     */
    public static postApiScooterFirmware(
        requestBody: {
            imei?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/firmware',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Upload controller fault (E0)
     * @param requestBody
     * @returns any Fault uploaded
     * @throws ApiError
     */
    public static postApiScooterFault(
        requestBody: {
            imei: string;
            data: Array<string>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/fault',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detect upgrade (U0)
     * @param requestBody
     * @returns any Upgrade check completed
     * @throws ApiError
     */
    public static postApiScooterUpgradeCheck(
        requestBody: {
            imei?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/upgrade-check',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Send upgrade data (U1)
     * @param requestBody
     * @returns any Upgrade data sent
     * @throws ApiError
     */
    public static postApiScooterUpgradeData(
        requestBody: {
            imei?: string;
            data?: Array<string>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/upgrade-data',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Notify upgrade complete (U2)
     * @param requestBody
     * @returns any Upgrade success acknowledged
     * @throws ApiError
     */
    public static postApiScooterUpgradeOk(
        requestBody: {
            imei?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/upgrade-ok',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Set or get BLE key (K0)
     * @param requestBody
     * @returns any BLE key operation complete
     * @throws ApiError
     */
    public static postApiScooterBleKey(
        requestBody: {
            imei?: string;
            data?: Array<string>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/scooter/ble-key',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
