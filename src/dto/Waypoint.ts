import { SimConnectData } from './SimConnectData';
import { RawBuffer } from '../RawBuffer';

class Waypoint implements SimConnectData {
    latitude = 0; // degrees

    longitude = 0; // degrees

    altitude = 0; // feet

    /** flags of waypoints
     * @see flightsim.simconnect.SimConnectConstants#WAYPOINT_ON_GROUND
     * @see flightsim.simconnect.SimConnectConstants#WAYPOINT_REVERSE
     * @see flightsim.simconnect.SimConnectConstants#WAYPOINT_ALTITUDE_IS_AGL
     * @see flightsim.simconnect.SimConnectConstants#WAYPOINT_COMPUTE_VERTICAL_SPEED
     * @see flightsim.simconnect.SimConnectConstants#WAYPOINT_SPEED_REQUESTED
     * @see flightsim.simconnect.SimConnectConstants#WAYPOINT_THROTTLE_REQUESTED
     *
     */
    flags = 0;

    speed = 0; // knots

    throttle = 0; // percent

    read(buffer: RawBuffer) {
        this.latitude = buffer.readDouble();
        this.longitude = buffer.readDouble();
        this.altitude = buffer.readDouble();
        this.flags = buffer.readInt();
        this.speed = buffer.readDouble();
        this.throttle = buffer.readDouble();
    }

    // eslint-disable-next-line
    write(buffer: RawBuffer) {}
}

export { Waypoint };
