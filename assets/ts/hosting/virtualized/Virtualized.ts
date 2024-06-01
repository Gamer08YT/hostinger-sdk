import {Process} from "../process/Process";
import {VirtualizedType} from "./enums/VirtualizedType";

/**
 * Represents Virtualization Features of Hostinger.
 * @class
 */
export class Virtualized {
    // Store Instance of Process.
    private processIO : Process = new Process();

    // Store Instance of Virtualized.
    private virtualizedIO : Virtualized = new Virtualized();

    public create(typeIO : VirtualizedType) {

    }
}