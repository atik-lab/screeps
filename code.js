/**
 * This manages the code updates and version.
 */
var code = {
    /**
     * Returns current code version.
     * @return {string} getVersion
     */
    getVersion: function () {
        return Memory.code.version;
    },

    /**
     * Sets current code version
     * @param {string} version
     */
    setVersion: function (version) {
        Memory.code.version = version;
    },

    /**
     * Update model to the current version
     */
    update: function () {
        // init variables
        var name = null;
        var creep = null;
        // first time run
        if (typeof Memory.code == 'undefined') {
            Memory.code = {};
        }
        if (typeof Memory.code.version == 'undefined') {
            this.setVersion('1.0');
        }
        // v1.1
        if (this.getVersion() == '1.0') {
            for (name in Game.creeps) {
                creep = Game.creeps[name];
                if (creep.memory.role == 'harvester' || creep.memory.role == 'upgrader' || creep.memory.role == 'builder') {
                    creep.memory.role = 'probe';
                    creep.memory.state = 'init';
                    creep.memory.source_init = null;
                }
            }
            this.setVersion('1.1');
        }
        // v1.2
        if (this.getVersion() == '1.1') {
            Memory.arquitect = {};
            this.setVersion('1.2');
        }
        // v1.3
        if (this.getVersion() == '1.2') {
            for (name in Game.creeps) {
                creep = Game.creeps[name];
                if (creep.memory.role == 'probe') {
                    delete creep.memory.source_init;
                    creep.memory.state = 'init';
                    creep.memory.source_index = null;
                }
            }
            this.setVersion('1.3');
        }
        // v1.4
        if (this.getVersion() == '1.3') {
            for (name in Game.creeps) {
                creep = Game.creeps[name];
                if (creep.memory.role == 'probe') {
                    creep.memory.state = 'init';
                }
            }
            this.setVersion('1.4');
        }
        // v1.5
        if (this.getVersion() == '1.4') {
            for (name in Game.creeps) {
                creep = Game.creeps[name];
                if (creep.memory.role == 'probe') {
                    creep.memory.level = 1;
                }
            }
            this.setVersion('1.5');
        }
        // v1.6
        if (this.getVersion() == '1.5') {
            Memory.arquitect.probe_locations = {};
            this.setVersion('1.6');
        }
        // v1.7
        if (this.getVersion() == '1.6') {
            Memory.manager = {};
            for (name in Game.creeps) {
                creep = Game.creeps[name];
                if (creep.memory.role == 'probe' && creep.memory.state == 'controller') {
                    creep.memory.state = 'upgrade';
                }
            }
            this.setVersion('1.7');
        }
        // v1.8
        if (this.getVersion() == '1.7') {
            Memory.arquitect.worker_locations = {};
            delete Memory.arquitect.probe_locations;
            for (name in Game.creeps) {
                creep = Game.creeps[name];
                if (creep.memory.role == 'probe') {
                    creep.memory.role = 'worker';
                }
            }
            this.setVersion('1.8');
        }
        // v1.9
        if (this.getVersion() == '1.8') {
            Memory.arquitect.worker_locations = {};
            this.setVersion('1.9');
        }
        // 1.10
        if (this.getVersion() == '1.9') {
            for (name in Game.creeps) {
                creep = Game.creeps[name];
                if (creep.memory.role == 'soldier') {
                    creep.memory.archetype = creep.memory.especialization;
                    delete creep.memory.especialization;
                }
            }
            this.setVersion('1.10');
        }
        // 1.11
        if (this.getVersion() == '1.10') {
            Memory.general = {};
            this.setVersion('1.11');
        }
        // 1.12
        if (this.getVersion() == '1.11') {
            for (name in Game.creeps) {
                creep = Game.creeps[name];
                if (creep.memory.role == 'worker') {
                    creep.memory.state = 'ready';
                }
            }
            this.setVersion('1.12');
        }
        // 1.15
        if (this.getVersion() == '1.12' || this.getVersion() == '1.13' || this.getVersion() == '1.14') {
            for (name in Game.creeps) {
                creep = Game.creeps[name];
                creep.memory.initial_room = creep.pos.roomName;
            }
            this.setVersion('1.15');
        }
        // 1.16
        if (this.getVersion() == '1.15') {
            Memory.architect = {};
            Memory.architect.worker_locations = {};
            delete Memory.arquitect;
            this.setVersion('1.16');
        }
        // 1.18
        if (this.getVersion() == '1.16' || this.getVersion() == '1.17') {
            for (name in Game.creeps) {
                creep = Game.creeps[name];
                creep.revokeRampart();
                creep.revokeSource();
            }
            this.setVersion('1.18');
        }
        // 1.20
        if (this.getVersion() == '1.18' || this.getVersion() == '1.19') {
            for (name in Game.creeps) {
                creep = Game.creeps[name];
                creep.setValue('home', creep.room.name);
            }
            this.setVersion('1.20');
        }
    }
};

module.exports = code;
