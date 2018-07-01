/**
 * Created by www.wuleba.com on 2016/9/26.
 */

declare module 'react-sparklines' {
    module sparkline {

        export interface ISparklinesProps {
            data: number[];

            limit?: number;

            width?: number;

            height?: number;

            margin?: number;

            min?: number;

            max?: number;
        }

        export class Sparklines extends __React.Component<ISparklinesProps, {}> {
        }

        export class SparklinesLine extends __React.Component<{ color?: string, style?: __React.CSSProperties }, {}> {
        }

        export class SparklinesReferenceLine extends __React.Component<{ type: string }, {}> {
        }

        export class SparklinesNormalBand extends __React.Component<{}, {}> {
        }

        export class SparklinesSpots extends __React.Component<{}, {}> {
        }

        export class SparklinesBars extends __React.Component<{}, {}> {
        }
    }

    export = sparkline;
}
