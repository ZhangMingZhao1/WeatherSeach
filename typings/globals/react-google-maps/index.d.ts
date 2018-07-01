/**
 * Created by www.wuleba.com on 2016/9/26.
 */

declare namespace ReactGoogleMaps {
    interface IGoogleMapLoader {
        containerElement: any;
        googleMapElement: any;
    }

    export class GoogleMapLoader extends __React.Component<IGoogleMapLoader, {}> {

    }

    interface IGoogleMap {
        defaultZoom: number;
        defaultCenter: any;
    }

    export class GoogleMap extends __React.Component<IGoogleMap, {}> {

    }
}

declare module "react-google-maps" {
    export = ReactGoogleMaps;
}