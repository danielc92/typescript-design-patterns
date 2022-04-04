interface DeviceBaseProps {
  ramCapacity: number;
  ramSpeed: number;
  cpuSpeed: number;
  cpuCoreCount: number;
}
class Tablet {
  cpuCoreCount: number;
  cpuSpeed: number;
  ramCapacity: number;
  ramSpeed: number;

  constructor({
    cpuCoreCount,
    cpuSpeed,
    ramCapacity,
    ramSpeed,
  }: DeviceBaseProps) {
    this.cpuCoreCount = cpuCoreCount;
    this.cpuSpeed = cpuSpeed;
    this.ramSpeed = ramSpeed;
    this.ramCapacity = ramCapacity;
  }
}
class Desktop {
  cpuCoreCount: number;
  cpuSpeed: number;
  ramCapacity: number;
  ramSpeed: number;

  constructor({
    cpuCoreCount,
    cpuSpeed,
    ramCapacity,
    ramSpeed,
  }: DeviceBaseProps) {
    this.cpuCoreCount = cpuCoreCount;
    this.cpuSpeed = cpuSpeed;
    this.ramSpeed = ramSpeed;
    this.ramCapacity = ramCapacity;
  }
}

class MobilePhone {
  cpuCoreCount: number;
  cpuSpeed: number;
  ramCapacity: number;
  ramSpeed: number;

  constructor({
    cpuCoreCount,
    cpuSpeed,
    ramCapacity,
    ramSpeed,
  }: DeviceBaseProps) {
    this.cpuCoreCount = cpuCoreCount;
    this.cpuSpeed = cpuSpeed;
    this.ramSpeed = ramSpeed;
    this.ramCapacity = ramCapacity;
  }
}

type DeviceType = "Tablet" | "Desktop" | "MobilePhone";

const Devices = {
  Tablet,
  MobilePhone,
  Desktop,
};
function createDevice(
  deviceType: DeviceType,
  deviceProperties: DeviceBaseProps
) {
  const Device = Devices[deviceType];
  return new Device(deviceProperties);
}

export { createDevice };
