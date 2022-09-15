import * as fs from 'fs';
import * as path from 'path';

export interface MyFile {
    filepath: string;
    relativePath: string;
    name: string;
    ext: string;
}

export interface ReadFileOptions {
    deep?: boolean;
    extensionFilter?: string[];
    skip?: string[];
}

export function readFilesSync(inputDir: string, options: ReadFileOptions = {}): MyFile[] {
    const folders = [inputDir];
    const files = [];
    const deep = options.deep || false;
    const extensionFilter = options.extensionFilter || [];
    const skip = options.skip || [];

    while (folders.length) {
        const dir = folders.shift();

        fs.readdirSync(dir).forEach(filename => {
            const name = path.parse(filename).name;
            const ext = path.parse(filename).ext;
            const filepath = path.resolve(dir, filename);
            const stat = fs.statSync(filepath);
            const isFile = stat.isFile();

            if (skip.some(s => s === name)) {
                return;
            }

            if (isFile) {
                if (!extensionFilter.some(s => s === ext)) {
                    return;
                }

                files.push({
                    filepath,
                    relativePath: path.relative(inputDir, filepath),
                    name,
                    ext,
                });
            } else if (deep) {
                folders.push(filepath);
            }
        });
    }

    return files;
}