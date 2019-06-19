import { RequestHandler } from "express";

// https://github.com/RafalWilinski/express-status-monitor#readme
declare module "express-status-monitor" {
	interface Options {
		title?: string;
		theme?: string;
		path?: string;
		socketPath?: string;
		// websocket: existingSocketIoInstance,
		spans?: SpanItem[];
		chartVisibility?: ChartVisibility;
		healthChecks?: HealthCheckItem[];
		ignoreStartsWith?: string;
	}

	interface ChartVisibility {
		cpu?: boolean;
		mem?: boolean;
		load?: boolean;
		responseTime?: boolean;
		rps?: boolean;
		statusCodes?: boolean;
	}

	interface SpanItem {
		interval: number;
		retention: number;
	}

	interface HealthCheckItem {
		protocol: string;
		host: string;
		path: string;
		port: string;
	}

	export default function (opts?: Options): RequestHandler;
}
