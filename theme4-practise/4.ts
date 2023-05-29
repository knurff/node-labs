import os from 'os';
import si from 'systeminformation';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const printSystemInfo = async (): Promise<void> => {
    const operatingSystem: NodeJS.Platform = os.platform();
    const architecture: string = os.arch();
    const userName: string = os.userInfo().username;
    const cpuModels: string[] = os.cpus().map((cpu) => cpu.model);

    const graphicControllers: string[] = await si.graphics().then((data) =>
        data.controllers.map((controller) => `${controller.vendor}: ${controller.model}`)
    );

    const totalMemory: string = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    const usedMemory: string = ((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2);
    const freeMemory: string = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);

    const batteryInfo: si.Systeminformation.BatteryData = await si.battery();

    console.log('Operating System:', operatingSystem);
    console.log('Architecture:', architecture);
    console.log('Current User:', userName);
    console.log('CPU Core Models:', cpuModels);
    console.log('Graphic Controllers:', graphicControllers);
    console.log('Total Memory:', totalMemory, 'GB');
    console.log('Used Memory:', usedMemory, 'GB');
    console.log('Free Memory:', freeMemory, 'GB');
    console.log('Battery Charging:', batteryInfo.isCharging);
    console.log('Battery Percent:', batteryInfo.percent, '%');
};

let frequency: number | undefined;

rl.question('Введіть частоту в секундах: ', (answer) => {
    frequency = Number(answer);

    if (isNaN(frequency)) {
        console.log('Некоректне значення частоти. Будь ласка, введіть число.');
        rl.close();
        return;
    }

    setInterval(printSystemInfo, frequency * 1000);
    rl.close();
});
