# 不要なGitHubActionsの実行履歴を削除する
owner="yn1323"
repo="YPS-Terra"
file_name="chromatic_onready.yml"

gh api repos/${owner}/${repo}/actions/workflows/${file_name}/runs \
| jq -r '.workflow_runs[].id' \
| xargs -P4 -I{} gh api repos/{owner}/{repo}/actions/runs/{} -X DELETE