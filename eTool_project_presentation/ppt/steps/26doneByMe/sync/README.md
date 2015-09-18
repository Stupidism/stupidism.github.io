
    ETool.Sync:{
      Report: {
          uploadFilterFile,
          cmdReport: {
              excuteCmd: [
                  ConnectShell,
                  WriteLine(command),
                  SshShellExpect,
                  Regex.Match(result),
                  DisconnectShell
              ],
              downloadErrorLogFile
          },
          downloadReportFile,
          retrun: reportName
      },
      ParseReportFile(reportName): {
          readENodeBs,
          WriteProfile,
          applyProfile,
          return: configs
      },
      deleteNoDeltaENodeBs(configs),
      Config(Lock): {
          saveConfig(configs),
          uploadConfigFile,
          cmdConfig: {
              excuteCmd,
              downloadErrorLogFile
          },
          cmdActivate
      },
      Config(Config),
      Config(Unlock)
    }